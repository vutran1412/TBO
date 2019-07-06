# == Schema Information
#
# Table name: episodes
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  series_id      :string           not null
#  description    :text             not null
#  length         :string           not null
#  episode_number :integer          not null
#  season_number  :integer          not null
#  year           :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Episode < ApplicationRecord
    validates :title, :description, :year, :length, :episode_number, :season_number, :series_id, presence: true
    validates :title, uniqueness: true

    belongs_to :series, foreign_key: :series_id, class_name: :Series

    has_one_attached :thumbnail
    has_one_attached :poster
    has_one_attached :video
end
