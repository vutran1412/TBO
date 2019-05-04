# == Schema Information
#
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
#

class Movie < ApplicationRecord
    validates :title, :genre, :audio, :video, :year, :length, :description, presence: true
    validates :title, uniqueness: true

    has_many :lists, foreign_key: :content_id, class_name: :List
    has_many :users, through: :lists, source: :user
end
