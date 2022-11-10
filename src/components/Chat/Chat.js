import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

import './Chat.scss';

const Chat = () => {

  console.log(useSelector(state => state.authReducer.user))

  const user = useSelector(state => state.authReducer.user)

  // console.log(user)

  return (
    <div>
      <Navbar />
      <h1>Chat Screen</h1>
      <p>Welcome, {user.firstName}</p>
    </div>
  );
}

export default Chat;
