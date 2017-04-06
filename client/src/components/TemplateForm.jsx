import React, { Component } from 'react'
import UserKeys from './UserKeys'
import { getUsers } from '../utils/api.js'

class TemplateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      usersById: null, // object
      userKeys: null, // array
      // eslint-disable-next-line
      template: 'Hi there ${first_name} ${last_name}! Is ${phone_number} still the best number to reach you?',
      selectedId: null // integer, id of the selected user
    }
  }

  componentDidMount() {
    getUsers()
      .then(res => {
        const { users } = res

        const userKeys = []
        for (let key in users[0]) { userKeys.push(key) }

        const usersById = users.reduce((hash, user) => {
          hash[user.id] = user
          return hash
        }, {})

        this.setState({ usersById, userKeys, selectedId: 1 })
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { template, usersById, selectedId } = this.state
    const selectedPerson = usersById[selectedId]
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
    const { usersById, userKeys, template } = this.state

    return (
      <form className="template-form" onSubmit={this.handleSubmit}>
        {!!userKeys ? <UserKeys userKeys={userKeys} /> : null}
        <textarea value={template} onChange={this.handleTextAreaChange} />
        {!!usersById ? renderOptions(usersById, this.handleSelect) : null}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default TemplateForm

/* helpers */

function renderOptions(users, cb) {
  const options = []

  let user, name

  for (let userId in users) {
    user = users[userId]
    name = `${user.first_name} ${user.last_name}`

    options.push(
      <option value={user.id} key={name + ' ' + user.id}>
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
