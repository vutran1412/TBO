# == Schema Information
#
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
#

class Movie < ApplicationRecord
    validates :title, :genre, :audio, :format, :year, :length, :description, presence: true
    validates :title, uniqueness: true

    has_one_attached :thumbnail
    has_one_attached :poster
    has_one_attached :video    
end