import React, { useContext, useEffect, useRef } from "react";
import image from "/src/imgs/pexels-photo-91227.jpeg";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  
  useEffect(() => {
    ref.current?.scrollIntoView({behavior:'smooth'})
  },[message])

  return (
    <div
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="User profile picture"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && (
          <img src={message.img} alt="User profile picture" />
        )}
      </div>
    </div>
  );
}

export default Message;
