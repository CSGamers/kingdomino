import React from 'react';

const Login = props => {
  return (
    <div>
      <input type='text' name='username' placeholder='Username' value={props.userName} onChange={(e) => { props.handleUserName(e) }} />
      <input type='password' name='password' placeholder='Password' value={props.password} onChange={(e) => { props.handlePassword(e) }} />
      <button onClick={() => {props.handleLogin();}}>Login</button>
      <p>Don't have an account? Sign up <span className='login-toggle' onClick={() => { props.handleTogglePage(); }}>here</span>.</p>
    </div>
  );
}

export default Login;