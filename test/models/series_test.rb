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

require 'test_helper'

class SeriesTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
