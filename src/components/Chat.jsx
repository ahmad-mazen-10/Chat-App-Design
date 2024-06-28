import React, { useContext } from "react";
import Cam from "../imgs/cam.png";
import Add from "../imgs/add.png";
import More from "../imgs/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

function Chat() {
    const { data } = useContext(ChatContext);

  return (
    <section className="chat">
      {/* // style={{ display: "flex", flexDirection: "column" }}> */}
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages />
        <Input />
    </section>
  );
}

export default Chat;
