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

# Table name: series
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  rating      :string
#  audio       :float
#  format      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

# Series.create!(
#     title: ,
#     description: ,
#     rating: "TV-MA",
#     audio: 5.1,
#     format: "HD"
# )

# Table name: episodes
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  series_id      :integer          not null
#  description    :text             not null
#  length         :string           not null
#  episode_number :integer          not null
#  season_number  :integer          not null
#  year           :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

# Episode.create!(
#     title: "",
#     series_id: ,
#     description: "",
#     length: "",
#     episode_number: ,
#     season_number: ,
#     year: ,
# )

require "open-uri"
# User.destroy_all
# Movie.destroy_all
# Series.destroy_all
# Episode.destroy_all

# # <---------- Function to attach movie assets --------------------------------------->


def attach_assets(content, thumbnail_url, poster_url, video_url)
    content.thumbnail.attach(io: open(thumbnail_url), filename: "#{content.title.split.join}.jpeg")
    content.poster.attach(io: open(poster_url), filename: "#{content.title.split.join}poster.jpeg")
    content.video.attach(io: open(video_url), filename: "#{content.title.split.join}.mp4")
end

# User.create(
#     first_name: "Demo",
#     last_name: "User",
#     email: "demouser@email.com",
#     password: "password",
#     password_confirmation: "password"
# )

# # < --------------------- Movies AWS urls ---------------------------------------->

# MOVIE_THUMBNAILS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/dejavu.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/beerfest.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/crazyrichasians.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/deadpool2.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/halfbaked.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/macgruber.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/margincall.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/pacific_rim.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/themask.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/predator.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+thumbnail/thesiege.jpeg"
# ]


# MOVIE_POSTERS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/dejavuposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/beerfestposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/crazyrichasiansposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/deadpool2poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/halfbakedposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/macgruberposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/margincallposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/pacific_rim_poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/themaskposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/thepredatorposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/photos-v2/movie+poster/thesiegeposter.jpeg"
# ]

# MOVIE_VIDEOS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Deja+vu/dejavu.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Beerfest/beerfest.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Crazy+Rich+Asians/crazyrichasians.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/DeadPool+2/deadpool2.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Half+Baked/halfbaked.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Macgruber/macgruber.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Margin+Call/margincall.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Pacific+rim+Uprising/pacificrimuprisin.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/The+Mask/themask.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/Predator/thepredator.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/video-v2/The+Siege/thesiege.mp4"

# ]


# <---------------------------------- Series aws urls ----------------------------------------------->

# SERIES_THUMBNAILS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/chernobyl.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld.jpeg"
# ]

# SERIES_POSTERS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballersposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothersposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barryposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/chernobylposter.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworldposter.jpeg"
# ]

# def attach_series(content, thumbnail_url, poster_url)
#     content.thumbnail.attach(io: open(thumbnail_url), filename: "#{content.title.split.join}.jpeg")
#     content.poster.attach(io: open(poster_url), filename: "#{content.title.split.join}poster.jpeg")
# end

# <-------------------------- Seed Series ------------------------------------------->

# ballers = Series.create!(
#     title: "Ballers",
#     description: "The sun-soaked world of a group of past and present football players in and around Miami, FL is the setting for this half-hour HBO comedy series. Dwayne 'The Rock' Johnson stars as a retired superstar who is trying to find a foothold as a financial manager to current players as they navigate life off the field.",
#     rating: "TV-MA",
#     audio: 5.1,
#     format: "HD"
# )

# bandofbros = Series.create!(
#     title: "Band of Brothers",
#     description: "They were ordinary men, swept up in the most extraordinary conflict in history. This landmark ten-part miniseries based on Stephen E. Ambrose's best-seller recounts the remarkable achievements of an elite team of U.S. paratroopers whose World War II exploits are as incredible as they are true.",
#     rating: "TV-MA",
#     audio: 5.1,
#     format: "HD"
# )


# barry = Series.create!(
#     title: "Barry",
#     description: "A dark comedy starring Bill Hader (\"Saturday Night Live\"), who created and executive produced the series along with Alec Berg (HBO's \"Silicon Valley\"), Barry focuses on a depressed, low-rent hitman from the Midwest (Hader, in the title role) who falls in love with acting while on a job in LA. The supporting cast features Stephen Root, Henry Winkler and Sarah Goldberg.",
#     rating: "TV-MA",
#     audio: 5.1,
#     format: "HD"
# )
# chernobyl = Series.create!(
#     title: "Chernobyl",
#     description: "On April 26, 1986, the Chernobyl Nuclear Power Plant in the Soviet Union suffered a massive explosion. This gripping five-part miniseries tells the powerful and visceral story of the worst man-made accident in history, following the tragedy from the moment of the early-morning explosion through the chaos and loss of life in the ensuing days, weeks and months.",
#     rating: "TV-MA",
#     audio: 5.1,
#     format: "HD"
# )
# westworld = Series.create!(
#     title: "Westworld",
#     description: "In this series set in a futuristic Wild West fantasy park, a group of android 'hosts' deviate from their programmers' carefully planned scripts in a disturbing pattern of aberrant behavior. With an exceptional cast headed by Anthony Hopkins, Ed Harris, Evan Rachel Wood, James Marsden, Thandie Newton and Jeffrey Wright, 'Westworld' was inspired by Michael Crichton's 1973 film.",
#     rating: "TV-MA",
#     audio: 5.1,
#     format: "HD"
# )

# SERIES = [ballers, bandofbros, barry, chernobyl, westworld]

# SERIES.each_with_index do |series, i|
#     attach_series(series, SERIES_THUMBNAILS[i], SERIES_POSTERS[i])
# end



# <------------------------------ Barry Episodes aws urls --------------------------------->

# BARRY_THUMBNAIL = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry1.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry2.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry3.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry4.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry5.jpeg"
# ]

# BARRY_POSTER = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry1poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry2poster.jpg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry3poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry4poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/barry/barry5poster.jpeg"
# ]

# BARRY_VIDEO = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/barry/Barry+Official+Season+1+Trailer+%5BHBO+NOW%5D.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/barry/Barry+1x02+Promo+Use+It+(HD)+Bill+Hader+HBO+series.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/barry/Barry+1x03+Promo+Make+the+Unsafe+Choice+(HD)+Bill+Hader+HBO+series.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/barry/Barry+1x04+Promo+Commit...To+YOU+(HD)+Bill+Hader+HBO+series.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/barry/Barry+1x05+Promo+Do+Your+Job+(HD)+Bill+Hader+HBO+series.mp4"
# ]

# barry = Series.find_by(title: "Barry")

# barry1 = Episode.create!(
#     title: "Ep 1 Chapter One: Make Your Mark",
#     series_id: barry.id,
#     description: "Series premiere. Barry (Bill Hader) is a disillusioned Midwesterner who became a hitman at the urging of Monroe Fuches, an old friend who's become his handler. Sent to LA to kill a young actor, Barry accidentally interrupts an acting class and gets bitten by the acting bug as he bonds with teacher/guru Gene Cousineau and his students, including a pretty girl named Sally Reed.",
#     length: "34 min",
#     episode_number: 1,
#     season_number: 1,
#     year: 2018,
# )

# barry2 = Episode.create!(
#     title: "Ep 2 Chapter Two: Use It",
#     series_id: barry.id,
#     description: "In the wake of some shocking news, Gene encourages his class to channel their feelings into their work. Resolved to quit his job and put the past behind him, Barry tries not to get pulled back in by Fuches and the Chechens. Sally tries to crack the nut that is Barry.",
#     length: "30 min",
#     episode_number: 2,
#     season_number: 1,
#     year: 2018,
# )

# barry3 = Episode.create!(
#     title: "Ep 3 Chapter Three: Make the Unsafe Choice",
#     series_id: barry.id,
#     description: "A frustrated Barry misses an acting class to honor an obligation. Detectives Moss and Loach try to piece together a murder puzzle. Gene presses Barry to take more risks. Sally is thrown for a loop during an audition, and turns to Barry for comfort. The Chechens rejoice when a legendary assassin arrives.",
#     length: "34 min",
#     episode_number: 3,
#     season_number: 1,
#     year: 2018,
# )
# barry4 = Episode.create!(
#     title: "Ep 4 Chapter Four: Commit...To YOU",
#     series_id: barry.id,
#     description: "Barry finds that distancing himself from Fuches and the Chechens might be harder than he thought. Sally is dismayed to learn that an audition arranged by a prospective agent has strings attached. Gene promises Ross a bombshell, but only over dinner. Barry invites a Marine buddy and his two pals to a party, where a rising actor threatens Barry's claim on Sally.",
#     length: "30 min",
#     episode_number: 4,
#     season_number: 1,
#     year: 2018,
# )

# barry5 = Episode.create!(
#     title: "Ep 5 Chapter Five: Do Your Job",
#     series_id: barry.id,
#     description: "Barry looks to hit the reset button with Sally, but a scene from Macbeth triggers a reaction that pushes them farther apart. Moss moves to interrogate members of Gene's acting class after a shooting video surfaces. Barry finds himself in a quandary after having to team up with a reckless new acquaintance named Taylor in a dangerous mission to wipe out a group of Bolivians.",
#     length: "30 min",
#     episode_number: 5,
#     season_number: 1,
#     year: 2018,
# )

# BARRY_EPISODES = [barry1, barry2, barry3, barry4, barry5]

# BARRY_EPISODES.each_with_index do |episode, i|
#     attach_assets(episode, BARRY_THUMBNAIL[i], BARRY_POSTER[i], BARRY_VIDEO[i])
# end


# <---------------------------------- Ballers episodes aws urls ---------------------------->

# BALLERS_THUMBNAILS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller1.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller2.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller3.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller4.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller5.jpeg"
# ]

# BALLERS_POSTERS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller1poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller2poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller3poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller4poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/ballers/baller5poster.jpeg"
# ]

# BALLERS_VIDEOS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/ballers/baller1video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/ballers/baller2video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/ballers/baller3video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/ballers/baller4video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/ballers/baller5video.mp4"
# ]

# ballers = Series.find_by(title: "Ballers")

# ballers1 = Episode.create!(
#     title: "Ep 1 Pilot",
#     series_id: ballers.id,
#     description: "Series Premiere. After the unexpected demise of a friend and former teammate, retired football superstar Spencer ramps up his efforts to build a post-football career in Miami, and feels pressure from Joe, his boss at a financial firm, to monetize his friendships. Meanwhile, recently retired player, Charles, copes with the realities of finding a new job.",
#     length: "35 min",
#     episode_number: 1,
#     season_number: 1,
#     year: 2015,
# )

# ballers2 = Episode.create!(
#     title: "Ep 2 Raise Up",
#     series_id: ballers.id,
#     description: "A cash-strapped Spencer struggles to close a deal when Vernon's best friend, Reggie, refuses to step aside, while Jason works hard to renegotiate for his client. Ricky finds that not all his new teammates are friendly. At his new job, Charles finds it hard to keep his mind off the game. At a brunch, Spencer counsels Vernon to learn from his mistakes.",
#     length: "34 min",
#     episode_number: 2,
#     season_number: 1,
#     year: 2015,
# )
# ballers3 = Episode.create!(
#     title: "Ep 3 Move the Chains",
#     series_id: ballers.id,
#     description: "Hoping to attract new clients, Spencer and Joe hold a corporate event. In their fight over Vernon, Spencer and Reggie's rivalry hits the boiling point. Bored by retirement, Charles lets loose for a night. Ricky learns his beef with his teammate, Alonzo, may be due to an awkward connection.",
#     length: "33 min",
#     episode_number: 3,
#     season_number: 1,
#     year: 2015,
# )
# ballers4 = Episode.create!(
#     title: "Ep 4 Heads Will Roll",
#     series_id: ballers.id,
#     description: "Facing pressure from Tracy, Spencer pays a visit to a neurologist. Charles is pursued by a woman he met at Spencer's party, while Joe breaks the rules to try to bag a big client. Ricky attempts to mend the fence with Alonzo. After Reggie tries to hijack Vernon's re-negotiation, Spencer takes a stand.",
#     length: "34 min",
#     episode_number: 4,
#     season_number: 1,
#     year: 2015,
# )
# ballers5 = Episode.create!(
#     title: "Ep 5 Machete Charge",
#     series_id: ballers.id,
#     description: "Ricky tries to find common ground with Alonzo. Charles's marriage is put to the test. Spencer and Joe step in to help Vernon with a crisis.",
#     length: "30 min",
#     episode_number: 5,
#     season_number: 1,
#     year: 2015,
# )

# BALLERS_EPISODES = [ballers1, ballers2, ballers3, ballers4, ballers5]

# BALLERS_EPISODES.each_with_index do |episode, i|
#     attach_assets(episode, BALLERS_THUMBNAILS[i], BALLERS_POSTERS[i], BALLERS_VIDEOS[i])
# end



# <------------------------------------ Seed band of brothers ---------------------------------->

# BOB_THUMBNAILS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob1.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob2.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob3.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob4.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob5.jpeg"
# ]

# BOB_POSTERS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob1poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob2poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob3poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob4poster.jpeg",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/bandofbrothers/bob5poster.jpeg"
# ]

# BOB_VIDEOS = [
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/bandofbrothers/bob1video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/bandofbrothers/bob2video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/bandofbrothers/bob3video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/bandofbrothers/bob4video.mp4",
#     "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/bandofbrothers/bob5video.mp4"
# ]

# bob = Series.find_by(title: "Band of Brothers")

# bob1 = Episode.create!(
#     title: "Ep 1 Currahee",
#     series_id: bob.id,
#     description: "On June 4, 1944--just two days before the Allied invasion of Normandy--Lts. Richard Winters (Damian Lewis) and Lewis Nixon (Ron Livingston) reflect back on the events and training that led them to D-Day with the 506th Parachute Infantry Regiment E (a.k.a. Easy Company). With David Schwimmer.",
#     length: "1 hr 14 min",
#     episode_number: 1,
#     season_number: 1,
#     year: 2001,
# )

# bob2 = Episode.create!(
#     title: "Ep 2 Day of Days",
#     series_id: bob.id,
#     description: "D-Day. Due to German flak, the tense men of Easy Company are dropped indiscriminately throughout the Normandy countryside, forcing Lt. Winters (Damian Lewis) to team up with a private from another company until he can find his mates.",
#     length: "53 min",
#     episode_number: 2,
#     season_number: 1,
#     year: 2001,
# )
# bob3 = Episode.create!(
#     title: "Ep 3 Carentan",
#     series_id: bob.id ,
#     description: "On D-Day plus two, the scattered men of Easy Company regroup with the help of Pvt. Albert Blithe (Marc Warren). Lt. Welsh (Rick Warden) then delivers their orders: they must take the town of Carentan.",
#     length: "1 hr 6 min",
#     episode_number: 3,
#     season_number: 1,
#     year: 2001,
# )
# bob4 = Episode.create!(
#     title: "Ep 4 Replacements",
#     series_id: bob.id ,
#     description: "Back in England, Easy Company's D-Day veterans heal their bodies and minds while getting acquainted with green replacement members. However, their respite ends quickly when they are sent into Holland as part of Operation Market-Garden.",
#     length: "1 hr 1 min",
#     episode_number: 4,
#     season_number: 1,
#     year: 2001,
# )
# bob5 = Episode.create!(
#     title: "Ep 5 Crossroads",
#     series_id: bob.id ,
#     description: "In this episode directed by Tom Hanks, Lt. Winters (Damian Lewis) leads a contingent on a risky mission over a Dutch dike. Meanwhile, Easy is left in the hands of Lt. 'Moose' Heyliger (Stephen McCole), who undertakes a rescue mission in the besieged town of Arnhem.",
#     length: "56 min",
#     episode_number: 4,
#     season_number: 1,
#     year: 2001,
# )

# BOB_EPISODES = [bob1, bob2, bob3, bob4, bob5]

# BOB_EPISODES.each_with_index do |bob, i|
#     attach_assets(bob, BOB_THUMBNAILS[i], BOB_POSTERS[i], BOB_VIDEOS[i])
# end


# <------------------------------ Seed West World ------------------------------>

WEST_WORLD_THUMBNAILS = [
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww1.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww2.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww3.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww4.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww5.jpeg"

]

WEST_WORLD_POSTERS = [
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww1poster.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww2poster.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww3poster.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww4poster.jpeg",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/photos/westworld/ww5poster.jpeg"
]

WEST_WORLD_VIDEOS = [
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/westworld/wwvideo1.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/westworld/wwvideo2.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/westworld/wwvideo3.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/westworld/wwvideo4.mp4",
    "https://tbo-dev.s3-us-west-1.amazonaws.com/Series/video/westworld/wwvideo5.mp4"
]

west_world = Series.find_by(title: "Westworld")

ww1 = Episode.create!(
    title: "Ep 1 The Original",
    series_id: west_world.id,
    description: "Series Premiere. As another day of fantasy plays out in Westworld--a vast, remote park where guests pay top dollar to share wild-west adventures with android \"hosts\"--top programmer Bernard Lowe alerts park founder Dr. Robert Ford about incidents of aberrant behavior cropping up in some recently re-coded hosts.",
    length: "1 hr 13 min",
    episode_number: 1,
    season_number: 1,
    year: 2016,
)
ww2 = Episode.create!(
    title: "Ep 2 Chestnut",
    series_id: west_world.id,
    description: "A pair of guests, first-timer William and repeat visitor Logan, arrive at Westworld with different expectations and agendas. Bernard and Quality Assurance head Theresa Cullen debate whether a recent host anomaly is contagious. Meanwhile, the Man in Black conscripts a condemned man, Lawrence, to help him uncover Westworld's deepest secrets.",
    length: "1 hr 2 min",
    episode_number: 2,
    season_number: 1,
    year: 2016,
)
ww3 = Episode.create!(
    title: "Ep 3 The Stray",
    series_id: west_world.id,
    description: "Elsie and Stubbs head into the hills in pursuit of a missing host. Teddy gets a new backstory, which sets him off in pursuit of a new villain, leaving Dolores alone in Sweetwater. Bernard investigates the origins of madness and hallucinations within the hosts. William finds an attraction he'd like to pursue and drags Logan along for the ride.",
    length: "1 hr 3 min",
    episode_number: 3,
    season_number: 1,
    year: 2016 ,
)
ww4 = Episode.create!(
    title: "Ep 4 Dissonance Theory",
    series_id: west_world.id,
    description: "Dolores joins William and Logan on a bounty hunt in the badlands. The Man in Black, with Lawrence in Tow, finds a critical clue in his search to unlock the maze. Dr. Ford and Theresa discuss the future of the park. Maeve is troubled by a recurring vision.",
    length: "1 hr 3 min",
    episode_number: 4,
    season_number: 1,
    year: 2016 ,
)
ww5 = Episode.create!(
    title: "Ep 5 Contrapasso",
    series_id: west_world.id,
    description: "Dolores, William and Logan reach Pariah, a town built on decadence and transgression--and are recruited for a dangerous mission. The Man in Black meets an unlikely ally in his search to unlock the maze.",
    length: "1 hr",
    episode_number: 5,
    season_number: 1,
    year: 2016 ,
)

WEST_WORLD_EPISODES = [ww1, ww2, ww3, ww4, ww5]

WEST_WORLD_EPISODES.each_with_index do |episode, i|
    attach_assets(episode, WEST_WORLD_THUMBNAILS[i], WEST_WORLD_POSTERS[i], WEST_WORLD_VIDEOS[i])
end


# # <----------------------------- Seed Movies ---------------------------------------------->

# dejavu = Movie.create!(
#     title: "Deja Vu",
#     genre: "Action",
#     audio: 5.1,
#     format: "HD",
#     year: 2006,
#     length: "2 hr 7 min",
#     description: "An ATF agent uses experimental government technology to go back in time to thwart a terrorist attack and save one of the victims he's become obsessed with. Denzel Washington stars in this mind-bending thriller",
#     rating: "PG-13",
# )

# beerfest = Movie.create!({
#     title: "Beerfest",
#     genre: "Comedy",
#     audio: 5.1,
#     format: "HD",
#     year: 2006,
#     length: "1 hr 52 min",
#     description: "Broken Lizard--the comedy troupe behind 'Super Troopers'--returns to knock back a few pints in this intoxicatingly funny comedy set at Munich's Oktoberfest. A year after getting smoked at an underground drinking competition, two beer-swilling brothers and their pals return for revenge. Can their sharpened skills in Beer Pong and Quarters help them to emerge victorious?",
#     rating: "R",
# })

# crazyrichasians = Movie.create!({
#     title: "Crazy Rich Asians",
#     genre: "Romance",
#     audio: 5.1,
#     format: "HD",
#     year: 2018,
#     length: "2 hr 2 min",
#     description: "This smash-hit romantic comedy, based on the international best-seller, is \"simply great fun\" (TIME). Constance Wu stars as a New Yorker who accompanies her boyfriend to Singapore to meet his family for the first time, only to discover that he's the scion of one of the country's wealthiest families, with a disapproving mother and a slew of socialites trying to steal him away.",
#     rating: "PG-13",
# })

# deadpool2 = Movie.create!({
#     title: "Deadpool 2",
#     genre: "Comedy",
#     audio: 5.1,
#     format: "HD",
#     year: 2018,
#     length: "2 hr 2 min",
#     description: "Wisecracking anti-hero Deadpool must join forces with a motley collection of mutants in order to save a rebellious teenage mutant from the grip of a powerful enemy: a genetically enhanced super-soldier from the future known as Cable. Ryan Reynolds reprises his role as Deadpool in this slam-bang sequel.",
#     rating: "R",
# })

# halfbaked = Movie.create!({
#     title: "Half Baked",
#     genre: "Comedy",
#     audio: 5.1,
#     format: "HD",
#     year: 1998,
#     length: "1 hr 23 min",
#     description: "Three pot-smoking pals light up the laughs when they attempt to free their jailed friend in this comedy. Dave Chappelle is hilarious as a New Yorker who regularly rolls joints with his roommates. But when one steps out for snacks and winds up in the slammer, the stoner pals wind up in comical pursuit of a different kind of 'green'--the kind that can bail out their buddy!",
#     rating: "R",
# })

# macgruber = Movie.create!({
#     title: "MacGruber",
#     genre: "Comedy",
#     audio: 5.1,
#     format: "HD",
#     year: 2010,
#     length: "1 hr 32 min",
#     description: "The mullet-loving character from 'Saturday Night Live' fame comes to the big screen in this hilarious comedy. When the U.S. is threatened by a nuclear device, the military turns to one man to stop it: MacGruber! Armed with his mind-blowing ability to escape daring situations, MacGruber races to defuse the bomb and stop the villainous Dieter Von Cunth.",
#     rating: "R",
# })

# margincall = Movie.create!({
#     title: "Margin Call",
#     genre: "Drama",
#     audio: 5.1,
#     format: "HD",
#     year: 2011,
#     length: "1 hr 47 min",
#     description: "Set just prior to the financial crisis of 2008, this riveting, fact-based drama follows a group of employees at an investment bank in the 24 hours after learning they are on the brink of collapse. Nominated for a 2011 Best Original Screenplay Oscar®. Starring Kevin Spacey, Paul Bettany, Jeremy Irons, Zachary Quinto, Penn Badgley, Simon Baker with Demi Moore and Stanley Tucci.",
#     rating: "R",
# })

# pacificrim = Movie.create!({
#     title: "Pacific Rim: Uprising",
#     genre: "Action",
#     audio: 5.1,
#     format: "HD",
#     year: 2018,
#     length: "1 hr 51 min",
#     description: "Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat.",
#     rating: "PG-13",
# })

# themask = Movie.create!({
#     title: "The Mask",
#     genre: "Comedy",
#     audio: 5.1,
#     format: "HD",
#     year: 2006,
#     length: "1 hr 42 min",
#     description: "Jim Carrey is at his rubber-faced finest in this comedy blockbuster. Packed with eye-popping (literally) special effects courtesy of Industrial Light & Magic, the film is wall-to-wall laughs as Carrey plays a milquetoast bank clerk who finds a mask that transforms him into a cartoon-like ladies' man and tough guy.",
#     rating: "PG-13",
# })

# predator = Movie.create!({
#     title: "The Predator",
#     genre: "Action",
#     audio: 5.1,
#     format: "HD",
#     year: 2018,
#     length: "1 hr 48 min",
#     description: "The Predators have returned to Earth for another round of murderous mayhem in this thrilling fourth installment in the \"Predator\" series. Can a group of battle-weary mercenaries stop the alien killing machines in this action epic that RogerEbert.com called, \"a fun, brutal fighting machine that wastes no time getting down to business.\"",
#     rating: "R",
# })

# thesiege = Movie.create!({
#     title: "The Siege",
#     genre: "Action",
#     audio: 5.1,
#     format: "HD",
#     year: 1998,
#     length: "1 hr 56 min",
#     description: "Terrorists target New York City in this highly charged thriller. An FBI agent and a operative team up, but find themselves in a war with a headstrong general after the president declares martial law in Gotham!",
#     rating: "R",
# })

# MOVIES = [dejavu, beerfest, crazyrichasians, deadpool2, halfbaked, macgruber, margincall, pacificrim, themask, predator, thesiege]

# MOVIES.each_with_index do |movie, i|
#     attach_assets(movie, MOVIE_THUMBNAILS[i], MOVIE_POSTERS[i], MOVIE_VIDEOS[i])
# end