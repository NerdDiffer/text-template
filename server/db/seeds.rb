require 'csv'

filename = Rails.root.join('db/seeds', 'patients.csv')
rows = CSV.read(filename, headers: true, encoding: 'UTF-8')

rows.each do |row|
  patient = Patient.new
  patient.first_name = row['first_name']
  patient.last_name = row['last_name']
  patient.phone_number = row['phone_number']
  patient.email = row['email']
  patient.street_address = row['street_address']
  patient.city = row['city']
  patient.state = row['state']
  patient.zip = row['zip']
  patient.save
end
