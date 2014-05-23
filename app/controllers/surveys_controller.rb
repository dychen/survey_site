class SurveysController < ApplicationController
  def new
    @survey = Survey.new
  end

  def create
    require 'pry'
    binding.pry
    params
    survey_params = {
      user_id: 1
    }
    @survey = current_user.surveys.build(survey_params)
    if @survey.save
      redirect_to root_path
    else
      @obj = 'survey'
      render 'new'
    end
  end

  private

  def survey_params
    params.require(:survey).permit(:user_id, :title, :description)
  end
end
