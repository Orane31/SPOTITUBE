# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'


User.destroy_all

Playlist.destroy_all

Video.destroy_all






5.times do |i|


    User.create(
      
    email: Faker::Name.first_name + "@test.com", 

    name: Faker::Name.first_name,

    description: Faker::Lorem.paragraph,

    password: "123456",

    password_confirmation: "123456",

    is_admin: false

  )
    end

puts "Create User - Done"


5.times do |x|

    Playlist.create(

      title: Faker::ChuckNorris.fact,
      description: Faker::Lorem.paragraph,
      private_mode: false,
      collaborative_mode: false,
      owner_id: User.all.sample.id

    
    )

end

puts "Create Playlist - Done"

5.times do |x|
  Video.create(
    title: "SPOTITUBE",
    url: "https://www.youtube.com/watch?v=aeePeVUW6-k",
    playlist_id: Playlist.all.sample.id
  )
end

puts "Create Vidéo - Done"





