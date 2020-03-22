import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import Profile from "./profile/profile";
import Actions from "./actions/actions";
import ReportsIndex from "./reports/components/reportsIndex";
import ReportShow from "./reports/components/reportShow";
import ReportCreate from "./reports/components/reportCreate";
import ReportUpdate from "./reports/components/reportUpdate";
import UsersIndex from "./users/components/usersIndex";
import UsersUpdate from "./users/components/usersUpdate";

// I need a script to disappear the alerts after 5 sec

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () { 

  const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}

        <Route path="/" exact render={() => (
          <div className="intro">
                <h2 > <span style={{color: "orange"}}>  Report Management System </span> <span style={{color: "#017B43"}}> RMS </span> <br/> Your Place To Manage Your Reports <br/> Whenever You Are, Wherever You Go.</h2>
                <img className="intro-img" src="https://media.giphy.com/media/u49OVoPIiGyouANvLb/giphy.gif" alt="" width="424" height="424" /> 
            </div>
            )}/>

        <main className="container">
          {/* <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} /> )} /> */}

          <AuthenticatedRoute user={user}  path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} /> )} />  

          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} /> )} />

          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} /> )} />

          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />)} />

          <AuthenticatedRoute user={user} path="/profile" exact render={ () => ( 
            <Profile user={user} />) }/>
          
          <AuthenticatedRoute user={user} path="/actions" exact render={ () => ( 
            <Actions user={user} />) }/>

          <AuthenticatedRoute user={user} path="/reports" exact render={ () => ( 
            <ReportsIndex user={user} />) }/>
          
          <AuthenticatedRoute user={user} path="/report/new" exact render={ () => ( 
            <ReportCreate user={user} />) }/>

          <AuthenticatedRoute user={user} path="/report/edit/:id" exact render={ () => ( 
            <ReportUpdate user={user}/>) }/>

          <AuthenticatedRoute user={user} path="/reports/:id" render={ () => ( 
            <ReportShow user={user} />) }/>

          <AuthenticatedRoute user={user} path="/users" exact render={ () => ( 
            <UsersIndex user={user} />) }/>

          <AuthenticatedRoute user={user} path="/users/edit/:id" render={ () => ( 
            <UsersUpdate user={user} />) }/>   

        </main>

      </React.Fragment>
    )
  }
}

export default App
