import React from 'react'

const UserKeys = ({ userKeys }) => (
  <div className="available-user-keys">
    <h3>Available User Keys</h3>
    <p>{userKeys.join(', ')}</p>
  </div>
)

export default UserKeys
