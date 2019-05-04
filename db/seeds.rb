# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  genre       :string           not null
#  audio       :float            not null
#  video       :string           not null
#  year        :integer          not null
#  length      :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  rating      :string           not null

Movie.destroy_all

black_klans_man = Movie.new(title: "BlacKkKlansman", genre: "drama", audio: 5.1, video: "HD", year: 2018, length: "2 hr 16 min", description: "Nominated for six Oscars®, including Best Picture, this film is described by the New York Times as 'a furious, funny, blunt and brilliant confrontation with the truth.' Directed by Spike Lee, the film tells the true story of Ron Stallworth, an African American detective in the early 1970s who sets out to infiltrate the Ku Klux Klan with help from a white undercover partner.", rating: 'R')
dead_pool = Movie.new(title: "Deadpool 2", genre: "comedy", audio: 5.1, video: "HD", year: 2018, length: "2 hr 1 min", description: "Wisecracking anti-hero Deadpool must join forces with a motley collection of mutants in order to save a rebellious teenage mutant from the grip of a powerful enemy: a genetically enhanced super-soldier from the future known as Cable. Ryan Reynolds reprises his role as Deadpool in this slam-bang sequel.", rating: 'R')
get_him_to_greek = Movie.new(title: "Get Him to the Greek", genre: "comedy", audio: 5.1, video: "HD", year: 2010, length: "1 hr 15 min", description: "Transporting a washed-up rock star to his much-publicized comeback concert turns into an insane three-day journey for a junior record executive in this comedy. Jonah Hill stars as earnest young exec Aaron Green and Russell Brand is Aldous Snow--the out-of-control rocker he's been sent to retrieve. What follows is a wild three-day binge in the classic rock-n-roll tradition.", rating: 'R')

black_klans_man.save
dead_pool.save
get_him_to_greek.save
# movie = Movie.new(title: , genre: , audio: , video: , year: , length: , description: , rating: )
# movie = Movie.new(title: , genre: , audio: , video: , year: , length: , description: , rating: )
# movie = Movie.new(title: , genre: , audio: , video: , year: , length: , description: , rating: )