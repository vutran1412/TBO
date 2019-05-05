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

# Table name: series
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  rating      :string           not null
#  audio       :float            not null
#  video       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

# Table name: episodes
#
#  id          :bigint           not null, primary key
#  season_id   :integer          not null
#  title       :string           not null
#  description :text             not null
#  length      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  year        :integer

Movie.destroy_all
Series.destroy_all

black_klans_man = Movie.new(title: "BlacKkKlansman", genre: "drama", audio: 5.1, video: "HD", year: 2018, length: "2 hr 16 min", description: "Nominated for six Oscars®, including Best Picture, this film is described by the New York Times as 'a furious, funny, blunt and brilliant confrontation with the truth.' Directed by Spike Lee, the film tells the true story of Ron Stallworth, an African American detective in the early 1970s who sets out to infiltrate the Ku Klux Klan with help from a white undercover partner.", rating: 'R')
dead_pool = Movie.new(title: "Deadpool 2", genre: "comedy", audio: 5.1, video: "HD", year: 2018, length: "2 hr 1 min", description: "Wisecracking anti-hero Deadpool must join forces with a motley collection of mutants in order to save a rebellious teenage mutant from the grip of a powerful enemy: a genetically enhanced super-soldier from the future known as Cable. Ryan Reynolds reprises his role as Deadpool in this slam-bang sequel.", rating: 'R')
get_him_to_greek = Movie.new(title: "Get Him to the Greek", genre: "comedy", audio: 5.1, video: "HD", year: 2010, length: "1 hr 15 min", description: "Transporting a washed-up rock star to his much-publicized comeback concert turns into an insane three-day journey for a junior record executive in this comedy. Jonah Hill stars as earnest young exec Aaron Green and Russell Brand is Aldous Snow--the out-of-control rocker he's been sent to retrieve. What follows is a wild three-day binge in the classic rock-n-roll tradition.", rating: 'R')

black_klans_man.save
dead_pool.save
get_him_to_greek.save

barry = Series.new(title: 'Barry', description: "A dark comedy starring Bill Hader ('Saturday Night Live'), who created and executive produced the series along with Alec Berg (HBO's 'Silicon Valley'), Barry focuses on a depressed, low-rent hitman from the Midwest (Hader, in the title role) who falls in love with acting while on a job in LA. The supporting cast features Stephen Root, Henry Winkler and Sarah Goldberg.", rating: 'MA', audio: 5.1, video: 'HD')
barry.save
barry_season_one = Season.new(series_id: barry.id)
barry_season_one.save

barry_season_one_episode_one = Episode.new(season_id: barry_season_one.id, title: "Chapter One: Make Your Mark", description: "Series premiere. Barry (Bill Hader) is a disillusioned Midwesterner who became a hitman at the urging of Monroe Fuches, an old friend who's become his handler. Sent to LA to kill a young actor, Barry accidentally interrupts an acting class and gets bitten by the acting bug as he bonds with teacher/guru Gene Cousineau and his students, including a pretty girl named Sally Reed.", length: "34 min", year: 2018)
barry_season_one_episode_one.save



# series = Series.new(title: , description: , rating: , audio: , video:)
# series = Series.new(title: , description: , rating: , audio: , video:)


# movie = Movie.new(title: , genre: , audio: , video: , year: , length: , description: , rating: )
# movie = Movie.new(title: , genre: , audio: , video: , year: , length: , description: , rating: )
# movie = Movie.new(title: , genre: , audio: , video: , year: , length: , description: , rating: )