import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSocket from './hooks/socketConnect';
import Navbar from './components/Navbar/Navbar';
import { fetchChats } from '../../store/actions/chat';
import FriendList from './components/FriendList/FriendList';
import Messenger from './components/Messenger/Messenger';

import { useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';

import './Chat.scss';

const Chat = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const user = useSelector(state => state.authReducer.user);

  // check token nya expired gak
  const token = localStorage.getItem('token');
  const tokenExpired = isExpired(token);

  useSocket(user, dispatch);

  useEffect(() => {
    if (tokenExpired) {
      history('/login');
    }
  }, [history, tokenExpired]);

  // useEffect(() => {
  //   dispatch(fetchChats()).then(res => console.log(res)).catch(err => console.log(err))
  // }, [dispatch]);

  return (
    <div id='chat-container'>
      <Navbar />
      <div id='chat-wrap'>
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
}

export default Chat;
