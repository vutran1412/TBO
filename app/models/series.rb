# == Schema Information
#
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
#

class Series < ApplicationRecord
    validates :title, :description, :rating, :audio, :video, presence: true
    validates :title, uniqueness: true

    has_many :lists, foreign_key: :content_id, class_name: :List
    has_many :seasons, foreign_key: :series_id, class_name: :Season
    has_many :episodes, through: :season, source: :episodes
    has_many :users, through: :lists, source: :user
end
