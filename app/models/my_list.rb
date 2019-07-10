# == Schema Information
#
# Table name: my_lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MyList < ApplicationRecord
    validates :user_id, presence: true
    validates :user_id, uniqueness: true

    belongs_to :user, foreign_key: :user_id, class_name: :User
    has_many :movies, foreign_key: :list_id, class_name: :Movie
    has_many :series, foreign_key: :list_id, class_name: :Series
end
