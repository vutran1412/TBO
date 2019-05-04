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

require 'test_helper'

class EpisodeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
