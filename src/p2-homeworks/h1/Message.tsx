import React from "react";
import style from "./Message.module.css";

type MessageData = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessageData) {
  return (
    <div className={style.main}>
      <img src={props.avatar} alt="avatar" />
      <div className={style.mainmessage}>
        <div className={style.name}>{props.name}</div>
        <div className={style.message}>{props.message}</div>
        <div className={style.time}>{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
