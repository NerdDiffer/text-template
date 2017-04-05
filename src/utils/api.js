import Axios from 'axios'

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

const getUsers = () => {
  return client.get('/users')
    .then(res => {
      const { data } = res
      return data
    })
    .catch(err => logError(err))
}

const getUser = userId => {
  return client.get(`/users/${userId}`)
    .then(res => {
      const { data } = res
      console.log(data)
    })
    .catch(err => logError(err))
}

const createUser = params => {
  return client.post('/users', { ...params })
    .then(res => {
      const { data } = res
      console.log(data)
    })
    .catch(err => logError(err))
}

export { getUsers, getUser, createUser }

// helpers
function logError(e) {
  if (!e.response) {
    console.log(e.message)
  } else {
    const { data, status, headers } = e.response
    console.log(data)
    console.log(status)
    console.log(headers)
  }

  console.log(e.config)
}
