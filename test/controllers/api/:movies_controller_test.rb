require 'test_helper'

class Api:::moviesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_:movies_index_url
    assert_response :success
  end

  test "should get show" do
    get api_:movies_show_url
    assert_response :success
  end

end
