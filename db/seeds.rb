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
#  title       :string
#  genre       :string
#  audio       :float
#  format      :string
#  year        :integer
#  length      :string
#  description :text
#  rating      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

# Movie.create!(
#     title: ,
#     genre: ,
#     audio: ,
#     format: ,
#     year: ,
#     length: ,
#     description: ,
#     rating: ,
# )

require "open-uri"
User.destroy_all
Movie.destroy_all

User.create(
    first_name: "Demo",
    last_name: "User",
    email: "demouser@email.com",
    password: "password",
    password_confirmation: "password"
)

# < --------------------- Development ---------------------------------------->

MOVIE_THUMBNAILS = [
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/dejavu.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/beerfest.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/crazyrichasians.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/deadpool2.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/halfbaked.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/macgruber.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/margincall.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/pacific_rim.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/themask.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/predator.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/thesiege.jpeg"
]


MOVIE_POSTERS = [
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/dejavuposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/beerfestposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/crazyrichasiansposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/deadpool2poster.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/halfbakedposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/macgruberposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/margincallposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/pacific_rim_poster.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/themaskposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/thepredatorposter.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/thesiegeposter.jpeg"
]

MOVIE_VIDEOS = [
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Deja+vu/dejavu.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Beerfest/beerfest.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Crazy+Rich+Asians/crazyrichasians.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/DeadPool+2/deadpool2.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Half+Baked/halfbaked.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Macgruber/macgruber.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Margin+Call/margincall.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Pacific+rim+Uprising/pacificrimuprisin.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/The+Mask/themask.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Predator/thepredator.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/The+Siege/thesiege.mp4"

]


def attach_assets(content, thumbnail_url, poster_url, video_url)
    content.thumbnail.attach(io: open(thumbnail_url), filename: "#{content.title.split.join}.jpeg")
    content.poster.attach(io: open(poster_url), filename: "#{content.title.split.join}poster.jpeg")
    content.video.attach(io: open(video_url), filename: "#{content.title.split.join}.mp4")
end

dejavu = Movie.create!(
    title: "Deja Vu",
    genre: "Action",
    audio: 5.1,
    format: "HD",
    year: 2006,
    length: "2 hr 7 min",
    description: "An ATF agent uses experimental government technology to go back in time to thwart a terrorist attack and save one of the victims he's become obsessed with. Denzel Washington stars in this mind-bending thriller",
    rating: "PG-13",
)

beerfest = Movie.create!({
    title: "Beerfest",
    genre: "Comedy",
    audio: 5.1,
    format: "HD",
    year: 2006,
    length: "1 hr 52 min",
    description: "Broken Lizard--the comedy troupe behind 'Super Troopers'--returns to knock back a few pints in this intoxicatingly funny comedy set at Munich's Oktoberfest. A year after getting smoked at an underground drinking competition, two beer-swilling brothers and their pals return for revenge. Can their sharpened skills in Beer Pong and Quarters help them to emerge victorious?",
    rating: "R",
})

crazyrichasians = Movie.create!({
    title: "Crazy Rich Asians",
    genre: "Romance",
    audio: 5.1,
    format: "HD",
    year: 2018,
    length: "2 hr 2 min",
    description: "This smash-hit romantic comedy, based on the international best-seller, is \"simply great fun\" (TIME). Constance Wu stars as a New Yorker who accompanies her boyfriend to Singapore to meet his family for the first time, only to discover that he's the scion of one of the country's wealthiest families, with a disapproving mother and a slew of socialites trying to steal him away.",
    rating: "PG-13",
})

deadpool2 = Movie.create!({
    title: "Deadpool 2",
    genre: "Comedy",
    audio: 5.1,
    format: "HD",
    year: 2018,
    length: "2 hr 2 min",
    description: "Wisecracking anti-hero Deadpool must join forces with a motley collection of mutants in order to save a rebellious teenage mutant from the grip of a powerful enemy: a genetically enhanced super-soldier from the future known as Cable. Ryan Reynolds reprises his role as Deadpool in this slam-bang sequel.",
    rating: "R",
})

halfbaked = Movie.create!({
    title: "Half Baked",
    genre: "Comedy",
    audio: 5.1,
    format: "HD",
    year: 1998,
    length: "1 hr 23 min",
    description: "Three pot-smoking pals light up the laughs when they attempt to free their jailed friend in this comedy. Dave Chappelle is hilarious as a New Yorker who regularly rolls joints with his roommates. But when one steps out for snacks and winds up in the slammer, the stoner pals wind up in comical pursuit of a different kind of 'green'--the kind that can bail out their buddy!",
    rating: "R",
})

macgruber = Movie.create!({
    title: "MacGruber",
    genre: "Comedy",
    audio: 5.1,
    format: "HD",
    year: 2010,
    length: "1 hr 32 min",
    description: "The mullet-loving character from 'Saturday Night Live' fame comes to the big screen in this hilarious comedy. When the U.S. is threatened by a nuclear device, the military turns to one man to stop it: MacGruber! Armed with his mind-blowing ability to escape daring situations, MacGruber races to defuse the bomb and stop the villainous Dieter Von Cunth.",
    rating: "R",
})

margincall = Movie.create!({
    title: "Margin Call",
    genre: "Drama",
    audio: 5.1,
    format: "HD",
    year: 2011,
    length: "1 hr 47 min",
    description: "Set just prior to the financial crisis of 2008, this riveting, fact-based drama follows a group of employees at an investment bank in the 24 hours after learning they are on the brink of collapse. Nominated for a 2011 Best Original Screenplay Oscar®. Starring Kevin Spacey, Paul Bettany, Jeremy Irons, Zachary Quinto, Penn Badgley, Simon Baker with Demi Moore and Stanley Tucci.",
    rating: "R",
})

pacificrim = Movie.create!({
    title: "Pacific Rim: Uprising",
    genre: "Action",
    audio: 5.1,
    format: "HD",
    year: 2018,
    length: "1 hr 51 min",
    description: "Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat.",
    rating: "PG-13",
})

themask = Movie.create!({
    title: "The Mask",
    genre: "Comedy",
    audio: 5.1,
    format: "HD",
    year: 2006,
    length: "1 hr 42 min",
    description: "Jim Carrey is at his rubber-faced finest in this comedy blockbuster. Packed with eye-popping (literally) special effects courtesy of Industrial Light & Magic, the film is wall-to-wall laughs as Carrey plays a milquetoast bank clerk who finds a mask that transforms him into a cartoon-like ladies' man and tough guy.",
    rating: "PG-13",
})

predator = Movie.create!({
    title: "The Predator",
    genre: "Action",
    audio: 5.1,
    format: "HD",
    year: 2018,
    length: "1 hr 48 min",
    description: "The Predators have returned to Earth for another round of murderous mayhem in this thrilling fourth installment in the \"Predator\" series. Can a group of battle-weary mercenaries stop the alien killing machines in this action epic that RogerEbert.com called, \"a fun, brutal fighting machine that wastes no time getting down to business.\"",
    rating: "R",
})

thesiege = Movie.create!({
    title: "The Siege",
    genre: "Action",
    audio: 5.1,
    format: "HD",
    year: 1998,
    length: "1 hr 56 min",
    description: "Terrorists target New York City in this highly charged thriller. An FBI agent and a operative team up, but find themselves in a war with a headstrong general after the president declares martial law in Gotham!",
    rating: "R",
})

MOVIES = [dejavu, beerfest, crazyrichasians, deadpool2, halfbaked, macgruber, margincall, pacificrim, themask, predator, thesiege]

MOVIES.each_with_index do |movie, i|
    attach_assets(movie, MOVIE_THUMBNAILS[i], MOVIE_POSTERS[i], MOVIE_VIDEOS[i])
end