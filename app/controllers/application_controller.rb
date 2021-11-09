class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_theme

  def set_theme
    if params[:theme].present?
      theme = params[:theme].to_sym
      cookies[:theme] = theme
      redirect_to(request.referrer || root_path)
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end
end
