
# README

# Trailer Box Office
![](https://media.giphy.com/media/LM2yGKXYo8SgnyrEsg/giphy.gif)

[Live App](trailer-box-office.herokuapp.com)

Trailer Box Office (TBO) is a single-page full-stack application that allows users to view trailers of HBO movies and tv shows. This app was initially developed in 10 days.

## Backend Technologies
 * Ruby on Rails
 * PostgreSQL
 * AWS S3

## Frontend Technologies
 * React.js
 * Redux.js
 * HTML
 * CSS
 * JavaScript

## Major Features
 ### 1. User Auth
         * User can create a new account using an email
         * User account is secured with a hashed password using Bcrypt
         * User can stay logged in via a session token generated on authentication
![](https://media.giphy.com/media/f5S6n8OGBPMucFsUHG/giphy.gif)
### 2. Video Display
         * User can view TV show episodes and movie trailers
         * Videos contains metadata and descriptions
         * All the video content had a poster, thumbnail, and video
         * Accounted for N + 1 queries from the backend using Eager Loading
![](https://media.giphy.com/media/kBH1f0S6fmJc2HT0lP/giphy.gif)
### 3. Genres
         * User can browse by genres
         * Utilize Redux selectors to filter and manage unilateral data flow
![](https://media.giphy.com/media/U786J10Jy3rkDesSdx/giphy.gif)
### 4. Seach
         * Fast and Robust Backend Seach Engine
         * Dynamically render results on the frontend
         * Prevent N + 1 Queries and maintained a flat front end state
![](https://media.giphy.com/media/VdnsVqTEqe4JsPktOT/giphy.gif)
