require 'csv'

filename = Rails.root.join('db/seeds', 'patients.csv')
rows = CSV.read(filename, headers: true, encoding: 'UTF-8')

rows.each do |row|
  user = User.new
  user.first_name = row['first_name']
  user.last_name = row['last_name']
  user.phone_number = row['phone_number']
  user.email = row['email']
  user.street_address = row['street_address']
  user.city = row['city']
  user.state = row['state']
  user.zip = row['zip']
  user.save
end
