class Video < ApplicationRecord
    belongs_to :playlist

    validates :title, presence: true, length: { maximum: 30 }
    validates :url, presence: true


    #add validates :platform, presence: true
end
