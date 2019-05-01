class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    # # respond_to :json
    # before_action :underscore_params!

    helper_method :current_user, :logged_in?

    def current_user
        User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!(current_user)
    end

    def login(user)
        session[:session_token] = user.reset_session_token
    end

    def logout!
        session[:session_token] = nil
    end

    # private
    # def underscore_params!
    #     params.deep_transform_keys!(&:underscore)
    # end
end
