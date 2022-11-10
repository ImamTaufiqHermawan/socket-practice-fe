import React, { useState } from 'react';
import loginImage from '../../assets/images/login.svg';
import { Link, useNavigate  } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';

import './Auth.scss';

const Login = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const [email, setEmail] = useState('imam.hermawan@gmail.com');
  const [password, setPassword] = useState('secret');

  const submitForm = (e) => {
    e.preventDefault()

    const data = {
      email,
      password
    }

    dispatch(login(data, history))
  }

  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div className='card-shadow'>
          <div id='image-section'>
            <img src={loginImage} alt='Login' />
          </div>

          <div id='form-section'>
            <h2>Welcome Back</h2>

            <form onSubmit={submitForm}>
              <div className='input-field mb-1'>
                <input
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required='required'
                  type="email"
                  placeholder='Email'
                />
              </div>

              <div className='input-field mb-2'>
                <input
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  required='required'
                  type="password"
                  placeholder='Password'
                />
              </div>

              <button>Login</button>
            </form>

            <p>doesn't have account? <Link to='/register'>Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
