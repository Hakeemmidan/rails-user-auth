class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      SendEmailJob.set(wait: 0.5.seconds).perform_later(@user.id)
      render json: ["Please check your email (#{@user.email})"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
    end
  end

  def new_pass_form
    user = User.find_by_reset_password_token(params[:id])
    
    if user && user.password_token_valid?
      @link_valid = true
    else
      @link_valid = false
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :username)
  end

end