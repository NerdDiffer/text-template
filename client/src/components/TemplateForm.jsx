import React, { Component } from 'react'
import PatientKeys from './PatientKeys'
import { getPatients } from '../utils/api.js'

class TemplateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      patientsById: null, // object
      patientKeys: null, // array
      // eslint-disable-next-line
      template: 'Hi there ${first_name} ${last_name}! Is ${phone_number} still the best number to reach you?',
      selectedId: null // integer, id of the selected patient
    }
  }

  componentDidMount() {
    getPatients()
      .then(res => {
        const { patients } = res

        const patientKeys = []
        for (let key in patients[0]) { patientKeys.push(key) }

        const patientsById = patients.reduce((hash, patient) => {
          hash[patient.id] = patient
          return hash
        }, {})

        this.setState({ patientsById, patientKeys, selectedId: 1 })
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { template, patientsById, selectedId } = this.state
    const selectedPerson = patientsById[selectedId]
    this.props.update(template, selectedPerson)
  }

  handleTextAreaChange = e => {
    const value = e.target.value
    this.setState({ template: value })
  }

  handleSelect = e => {
    const selectedId = e.target.value
    this.setState({ selectedId })
  }

  render() {
    const { patientsById, patientKeys, template } = this.state

    return (
      <form className="template-form" onSubmit={this.handleSubmit}>
        {!!patientKeys ? <PatientKeys patientKeys={patientKeys} /> : null}
        <textarea value={template} onChange={this.handleTextAreaChange} />
        {!!patientsById ? renderOptions(patientsById, this.handleSelect) : null}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default TemplateForm

/* helpers */

function renderOptions(patients, cb) {
  const options = []

  let patient, name

  for (let patientId in patients) {
    patient = patients[patientId]
    name = `${patient.first_name} ${patient.last_name}`

    options.push(
      <option value={patient.id} key={name + ' ' + patient.id}>
        {name}
      </option>
    )
  }

  return (
    <select onChange={cb}>
      {options}
    </select>
  )
}
