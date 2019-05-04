# == Schema Information
#
# Table name: seasons
#
#  id         :bigint           not null, primary key
#  series_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Season < ApplicationRecord
    validates :series_id, presence: true
    validates :series_id, uniqueness: true

    belongs_to :series, foreign_key: :series_id, class_name: :Series
    has_many :episodes, foreign_key: :season_id, class_name: :Episode
end