# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_04_190130) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "episodes", force: :cascade do |t|
    t.integer "season_id", null: false
    t.string "title", null: false
    t.text "description", null: false
    t.date "air_date", null: false
    t.string "length", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["season_id"], name: "index_episodes_on_season_id"
    t.index ["title"], name: "index_episodes_on_title"
  end

  create_table "lists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_lists_on_content_id"
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "title", null: false
    t.string "genre", null: false
    t.float "audio", null: false
    t.string "video", null: false
    t.integer "year", null: false
    t.string "length", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["genre"], name: "index_movies_on_genre"
    t.index ["title"], name: "index_movies_on_title"
    t.index ["year"], name: "index_movies_on_year"
  end

  create_table "seasons", force: :cascade do |t|
    t.integer "series_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["series_id"], name: "index_seasons_on_series_id"
  end

  create_table "series", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "rating", null: false
    t.float "audio", null: false
    t.string "video", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_series_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
