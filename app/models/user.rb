class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

has_many :collaborations

has_many :playlists, foreign_key: 'owner_id', class_name: 'Playlist'
has_one_attached :avatar

extend FriendlyId
  friendly_id :name, use: :slugged
end
