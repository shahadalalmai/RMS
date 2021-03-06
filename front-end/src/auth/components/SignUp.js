import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      name:'',
      email: '',
      admin: false, // default value of any user
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ name:'', email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { name, email, password, passwordConfirmation } = this.state

    return (
      <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>
        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          value={name}
          type="name"
          placeholder="Name"
          onChange={this.handleChange}
          className="form-control"
        />
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <label>User Role: </label>
          <select name="admin" value={this.state.admin} onChange={this.handleChange}>
                  <option value="true">Admin User</option>
                  <option value="false">Regular User</option>
          </select> <br/>
        <button type="submit">Sign Up</button>
      </form>
      </div>
    )
  }
}

export default withRouter(SignUp)
