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
#  list_id     :integer
#

class Movie < ApplicationRecord
    validates :title, :genre, :audio, :format, :year, :length, :description, presence: true
    validates :title, uniqueness: true

    has_one_attached :thumbnail
    has_one_attached :poster
    has_one_attached :video    

    belongs_to :my_list, foreign_key: :list_id, class_name: :MyList
    
end
