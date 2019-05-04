# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  content_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
    validates :user_id, presence: true
    validates :content_id, presence: true

    belongs_to :user, foreign_key: :user_id, class_name: :User
    belongs_to :series, foreign_key: :content_id, class_name: :Series
    belongs_to :movie, foreign_key: :content_id, class_name: :Movie
end