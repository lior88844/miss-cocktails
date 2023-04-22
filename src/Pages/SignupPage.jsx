import React, { Component } from 'react'
import { UserService } from '../services/user.service'

export default class Signup extends Component {
  state = {
    name: '',
  }
  handleChange = ({ target }) => {
    const field = target.name
    var value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value += value
        break
      case 'checkbox':
        value = target.checked
        break
    }
    this.setState({ name: value })
  }

  onSignup = (ev) => {
    ev.preventDefault()
    UserService.signUp(this.state.name)
    this.props.history.push('/customer')
  }
  render() {
    return (
      <div className="signup">
        <form onSubmit={this.onSignup}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            onInput={this.handleChange}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
