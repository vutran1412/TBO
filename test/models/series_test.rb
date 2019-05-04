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

require 'test_helper'

class SeriesTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
