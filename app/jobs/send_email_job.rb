class SendEmailJob < ApplicationJob
  queue_as :default

  def perform(userId)
    return if userId.nil?

    UserMailer.confirmation_email(userId).deliver_later
  end
end
