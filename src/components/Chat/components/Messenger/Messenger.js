import React from "react";
import { useSelector } from "react-redux";
import ChatHeader from '../ChatHeader/ChatHeader';

import './Mesenger.scss';

const Messenger = () => {

  const chat = useSelector(state => state.chatReducer.currentChat);

  const activeChat = () => {
    return Object.keys(chat).length > 0;
  }

  return (
    <div id='messenger' className="shadow-light">
      {
        activeChat() ?
          <div id='messenger-wrap'>
            <ChatHeader chat={chat} />
            <hr />
          </div>
          :
          <p>No Active Chat</p>
      }
    </div>
  )
}

export default Messenger;
