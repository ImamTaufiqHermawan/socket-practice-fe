import React, { useEffect, useState } from 'react';
import registerImage from '../../assets/images/register.svg';
import { Link, useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';

import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';

import './Auth.scss';

const Register = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');

  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);

  useEffect(() => {
    if (tokenExpired) {
      history('/login');
    }
  }, [history, tokenExpired]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastname = (e) => {
    setlastName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleGender = (e) => {
    console.log(gender)
    setGender(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault()

    const data = {
      firstName,
      lastName,
      email,
      gender,
      password
    }

    dispatch(register(data, history))
  }

  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div className='card-shadow'>
          <div id='image-section'>
            <img src={registerImage} alt='Register' />
          </div>

          <div id='form-section'>
            <h2>Create an account</h2>

            <form onSubmit={submitForm}>
              <div className='input-field mb-1'>
                <input
                  onChange={handleFirstName}
                  value={firstName}
                  required='required'
                  type="text"
                  placeholder='First name' />
              </div>

              <div className='input-field mb-1'>
                <input
                  onChange={handleLastname}
                  value={lastName}
                  required='required'
                  type="text"
                  placeholder='Last Name'
                />
              </div>

              <div className='input-field mb-1'>
                <input
                  onChange={handleEmail}
                  value={email}
                  required='required'
                  type="email"
                  placeholder='Email'
                />
              </div>

              <div className='input-field mb-1'>
                <select
                  onChange={handleGender}
                  value={gender}
                  required='required'
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>

              <div className='input-field mb-2'>
                <input
                  onChange={handlePassword}
                  value={password}
                  required='required'
                  type="password"
                  placeholder='Password'
                />
              </div>

              <button>Register</button>
            </form>

            <p>already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Register
