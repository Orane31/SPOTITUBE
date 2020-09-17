class Collaboration < ApplicationRecord
    belongs_to :playlist
    belongs_to :collaborator, foreign_key: 'collaborator_id', class_name: 'User'

    after_create :invited_email


    def invited_email

        CollaborationMailer.you_are_collaborating(self).deliver_now
    end
end