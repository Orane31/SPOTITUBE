module CollaborationsHelper

      def collaborates?(playlist)
        Collaboration.where(collaborator_id: current_user.id, playlist_id: playlist.id).size > 0
      end
end



