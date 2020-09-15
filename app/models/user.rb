class User < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable

    has_many :collaborations

    has_many :playlists, foreign_key: 'owner_id', class_name: 'Playlist'
    has_one_attached :avatar


    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/ }
    validates :password, presence: true, length: { minimum: 6 }
    validates :description, length: { maximum: 300 }
    validates :name, uniqueness: { case_sensitive: false }

    
    after_create :welcome_send


    def welcome_send
      UserMailer.welcome_email(self).deliver_now
    end

end
