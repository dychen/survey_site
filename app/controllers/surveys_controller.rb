class SurveysController < ApplicationController
  def new
    @survey = Survey.new
    3.times { @survey.questions.build(text: 'checkbox') }
  end

  def create
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
