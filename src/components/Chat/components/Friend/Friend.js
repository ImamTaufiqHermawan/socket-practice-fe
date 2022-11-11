import React from "react";

import './Friend.scss';

const Friend = ({chat}) => {
  return (
    <div>
      <p>{chat.Users[0].firstName}</p>
    </div>
  )
}

export default Friend;
