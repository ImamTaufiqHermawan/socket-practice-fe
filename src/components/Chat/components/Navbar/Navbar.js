import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../../../store/actions/auth';
import Modal from '../../../Modal/Modal';
import { updateProfile } from "../../../../store/actions/auth";
import './Navbar.scss';

const Navbar = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);

  const [showProfileOptions, setSHowProfileOptions] = useState(false);
  const [showProfileModal, setSHowProfileModal] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

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
    setGender(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault()

    const form = {
      firstName,
      lastName,
      email,
      gender,
      password,
      avatar,
    }

    if (password.length > 0) form.password = password

    const formData = new FormData()

    for (const key in form) {
      formData.append(key, form[key])
    }

    dispatch(updateProfile(formData)).then(() => setSHowProfileModal(false))
  }

  return (
    <div id='navbar'>
      <h2>Chat.io</h2>
      <div onClick={() => setSHowProfileOptions(!showProfileOptions)} id='profile-menu'>
        <img width="40" src={user.avatar} alt='Avatar' />
        <p>{user.firstName} {user.lastName}</p>
        <FontAwesomeIcon icon="caret-down" className="fa-icon" />

        {
          showProfileOptions &&
          <div id="profile-options">
            <p onClick={() => setSHowProfileModal(true)}>Update Profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        }

        {
          showProfileModal &&
          <Modal click={() => setSHowProfileModal(false)}>
            <Fragment key='header'>
              <h3 className="m-0">Update Profile</h3>
            </Fragment>
            <Fragment key='body'>
              <form>
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

                <div className='input-field mb-2'>
                  <input
                    onChange={e => setAvatar(e.target.files[0])}
                    type="file"
                  />
                </div>
              </form>
            </Fragment>
            <Fragment key='footer'>
              <button className="btn-success" onClick={submitForm}>Update</button>
            </Fragment>
          </Modal>
        }
      </div>
    </div>
  );
}

export default Navbar;