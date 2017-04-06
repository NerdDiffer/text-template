# Text template

Fetch users from the Rails server. Make a text template, such as:

'Hi there ${first_name} ${last_name}! Is ${phone_number} still the best number to reach you?'. Then select a user from the drop down menu & watch that user's info fill in your template.

A Rails 5 backend, React frontend.

## Getting started

### Backend

Depends on Rails 5 & bundler

```sh
cd server/
bundle install

# set up db
bundle exec rails db:migrate
bundle exec rails db:seed

# start server on port 3000
bundle exec rails s
```

### Front end

From a separate terminal window/tab...

```sh
cd client/
npm install
# runs on port 3001
npm start
```

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
