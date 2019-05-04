require 'test_helper'

class Api::SearchControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_search_index_url
    assert_response :success
  end

  test "should get show" do
    get api_search_show_url
    assert_response :success
  end

end
