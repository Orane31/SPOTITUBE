class CollaborationMailer < ApplicationMailer

    default from: 'kriefanthony@gmail.com'

    def you_are_collaborating(collaboration)
        #Retrieve the User instance in order to transfer it to the view in @user mode.
        @collaboration = Collaboration.find(collaboration.id)
        @recipient = User.find(@collaboration.collaborator_id)
        @playlist = Playlist.find(@collaboration.playlist_id)
    
        #Define an @url variable to be used in the e-mail view.
        @url  = 'http://stt-dev.herokuapp.com/' 
    
        #Invoking mail() enables sending e-mails w/ a recipient and a subject.
        mail(to: @collaboration.collaborator.email, subject: 'Tu as été invité(e) à participer à la playlist #{@collaboration.playlist.title} !') 
      end
end
