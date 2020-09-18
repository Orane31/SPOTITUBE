class UserMailer < ApplicationMailer
    default from: 'kriefanthony@gmail.com'

    def welcome_email(user)
        #Retrieve the User instance in order to transfer it to the view in @user mode.
        @user = user 
    
        #Define an @url variable to be used in the e-mail view.
        @url  = 'http://stt-dev.herokuapp.com/login' 
    
        #Invoking mail() enables sending e-mails w/ a recipient and a subject.
        mail(to: @user.email, subject: 'Bienvenue chez nous !') 
      end

end
