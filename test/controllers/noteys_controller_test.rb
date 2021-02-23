require "test_helper"

class NoteysControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get noteys_index_url
    assert_response :success
  end

  test "should get show" do
    get noteys_show_url
    assert_response :success
  end

  test "should get new" do
    get noteys_new_url
    assert_response :success
  end
end
