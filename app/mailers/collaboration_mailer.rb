class CollaborationMailer < ApplicationMailer

    default from: 'kriefanthony@gmail.com'

    def you_are_collaborating(collaboration)
        #on récupère l'instance user pour ensuite pouvoir la passer à la view en @user
        @collaboration = Collaboration.find(collaboration.id)
        @recipient = User.find(@collaboration.collaborator_id)
        @playlist = Playlist.find(@collaboration.playlist_id)
    
        #on définit une variable @url qu'on utilisera dans la view d’e-mail
        @url  = 'http://stt-dev.herokuapp.com/' 
    
        # c'est cet appel à mail() qui permet d'envoyer l’e-mail en définissant destinataire et sujet.
        mail(to: @collaboration.collaborator.email, subject: 'Tu as été invité(e) à participer à la playlist #{@collaboration.playlist.title} !') 
      end
end
