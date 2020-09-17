class Playlist < ApplicationRecord
    belongs_to :owner, foreign_key: 'owner_id', class_name: 'User'
    has_many :collaborations
    has_many :collaborators, through: :collaborations, class_name: 'User'
    has_many :videos
    has_one_attached :avatar

    validates :title, presence: true, length: { maximum: 28 }

end
