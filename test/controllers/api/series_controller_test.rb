require 'test_helper'

class Api::SeriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_series_index_url
    assert_response :success
  end

  test "should get show" do
    get api_series_show_url
    assert_response :success
  end

end
