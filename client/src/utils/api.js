import Axios from 'axios'

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

const getPatients = () => {
  return client.get('/patients')
    .then(res => {
      const { data } = res
      return data
    })
    .catch(err => logError(err))
}

const getPatient = patientId => {
  return client.get(`/patients/${patientId}`)
    .then(res => {
      const { data } = res
      console.log(data)
    })
    .catch(err => logError(err))
}

const createPatient = params => {
  return client.post('/patients', { ...params })
    .then(res => {
      const { data } = res
      console.log(data)
    })
    .catch(err => logError(err))
}

export { getPatients, getPatient, createPatient }

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
