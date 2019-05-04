# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string
#  last_name       :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :first_name, :last_name, :email, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password_digest, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token

    has_one :list, foreign_key: :user_id, class_name: :List
    has_many :movies, through: :list, source: :movie
    has_many :series, through: :list, source: :series

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_creds(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
