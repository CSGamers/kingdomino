import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './../display/Login';
import Signup from './../display/Signup';
import * as actions from "../../actions/actions";

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => {
  return(
    {
      loginUser : user => {
        dispatch(actions.loginUser(user));
      }
    }
  )
};

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      togglePage: 'login',
      username: '',
      password: ''
    }
  }

  handleTogglePage() {
    if (this.state.togglePage === 'login') {
      this.setState({ togglePage: 'signup' });
    } else {
      this.setState({ togglePage: 'login' });
    }
  }

  handleUserName(e) {
    const userName = e.target.value;

    this.setState({ username: userName });
  }

  handlePassword(e) {
    const password = e.target.value;

    this.setState({ password: password });
  }

  handleLogin() {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log('USER: ', res.user);
        this.props.loginUser(res.user);
      })
      .catch(err => console.log('Error: ', err));
  }

  handleSignup() {
    fetch('http://localhost:8000/signup', {
      method: 'POST',
      body: JSON.stringify({
        userName: this.state.username,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(res => {
        this.props.loginUser(res.user);
      })
      .catch(err => console.log('Error: ', err));
  }

  render() {
    return (
      <div id='user-login'>
        <img id='page-logo' src={this.props.logo}/>
        {this.state.togglePage === 'login' ?
          <Login handleTogglePage={this.handleTogglePage.bind(this)} handleUserName={this.handleUserName.bind(this)} handlePassword={this.handlePassword.bind(this)} userName={this.state.username} password={this.state.password} handleLogin={this.handleLogin.bind(this)} /> :
          <Signup handleTogglePage={this.handleTogglePage.bind(this)} handleUserName={this.handleUserName.bind(this)} handlePassword={this.handlePassword.bind(this)} userName={this.state.username} password={this.state.password} handleSignup={this.handleSignup.bind(this)} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

