import React from 'react'

const PatientKeys = ({ patientKeys }) => (
  <div className="available-patient-keys">
    <h3>Available Patient Keys</h3>
    <p>{patientKeys.join(', ')}</p>
  </div>
)

export default PatientKeys
