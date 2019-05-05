json.set! episode.id do
    json.extract! episode, :id, :season_id, :title, :description, :length, :year
end

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