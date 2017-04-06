class PatientsController < ApplicationController
  attr_reader :patients

  def index
    @patients = Patient.all
    render(:index)
  end

  def create
  end

  def show
  end
end
