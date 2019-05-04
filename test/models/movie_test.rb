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

require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
