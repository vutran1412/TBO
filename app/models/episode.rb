# == Schema Information
#
# Table name: episodes
#
#  id          :bigint           not null, primary key
#  season_id   :integer          not null
#  title       :string           not null
#  description :text             not null
#  air_date    :date             not null
#  length      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Episode < ApplicationRecord
    validates :season_id, :title, :description, :air_date, :length, presence: true
    validates :season_id, :title, uniqueness: true

    belongs_to :season, foreign_key: :season_id, class_name: :Season
end