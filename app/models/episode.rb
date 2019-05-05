# == Schema Information
#
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
#

class Episode < ApplicationRecord
    validates :season_id, :title, :description, :year, :length, presence: true
    validates :title, uniqueness: true

    belongs_to :season, foreign_key: :season_id, class_name: :Season
end
