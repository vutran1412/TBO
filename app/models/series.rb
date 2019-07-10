# == Schema Information
#
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
#

class Series < ApplicationRecord
    validates :title, :description, :rating, :audio , :format, presence: true
    validates :title, uniqueness: true

    has_many :episodes, foreign_key: :series_id, class_name: :Episode

    has_one_attached :thumbnail
    has_one_attached :poster
end
