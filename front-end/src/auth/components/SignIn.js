import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      admin: false
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()
    
    const { alert, history, setUser } = this.props
    signIn(this.state)
      .then(res => {
        setUser(res.data.user)
      this.setState({admin: res.data.user.admin})
      if (this.state.admin) // When the user is admin
      {history.push(`/actions`) } 
      else // when the user is regular user
      {history.push('/')}
      })
      .then(() => alert(messages.signInSuccess, 'success'))
      // .then(() => {}) // history.push('/')
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
      <form className='auth-form' onSubmit={this.onSignIn}>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
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
        <button type="submit">Sign In</button>
      </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
