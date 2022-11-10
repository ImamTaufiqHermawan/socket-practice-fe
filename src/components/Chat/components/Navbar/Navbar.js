import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {logout} from '../../../../store/actions/auth';

import './Navbar.scss';

const Navbar = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer.user)

  const [showProfileOptions, setSHowProfileOptions] = useState(false)

  return (
    <div id='navbar'>
      <h2>Chat.io</h2>
      <div onClick={() => setSHowProfileOptions(!showProfileOptions)} id='profile-menu'>
        <img width="40" src={user.avatar} alt='Avatar' />
        <p>{user.firstName}{user.lastName}</p>
        <FontAwesomeIcon icon="caret-down" className="fa-icon" />

        {
          showProfileOptions &&
          <div id="profile-options">
            <p>Update Profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        }
      </div>
    </div>
  );
}

export default Navbar;