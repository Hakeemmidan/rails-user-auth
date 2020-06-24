class UserMailer < ApplicationMailer
    def confirmation_email(userId)
        @user = User.find(userId)
        return if @user.nil?
        
        mail(to: @user.email, subject: 'AppName Email Confirmation 🍊')
    end

    def forgot_password_email(user)
        @user = user
        return if @user.nil?
        
        mail(to: @user.email, subject: 'AppName Password Reset 🔑')
    end
end