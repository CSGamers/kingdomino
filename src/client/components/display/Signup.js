import React from 'react';

const Signup = props => {
  return (
    <div>
      <input type='text' name='username' placeholder='Username' value={props.userName} onChange={(e) => { props.handleUserName(e) }} />
      <input type='text' name='password' placeholder='Password' value={props.password} onChange={(e) => { props.handlePassword(e) }} />
      <button onClick={() => {props.handleLogin}}>Signup</button>
      <p>Already have an account? Login <span className='login-toggle' onClick={() => { props.handleTogglePage(); }}>here</span>.</p>
    </div>
  )
}

export default Signup;