import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../context";

export default function Chat() {
  const chatContainerRef = useRef(null);
  const context = useContext(Context);
  const chats = context.state.chats;
  useEffect(() => {
    const scrollHeight = chatContainerRef.current.scrollHeight;
    const scrollTop = chatContainerRef.current.scrollTop;
    chatContainerRef.current.scrollTo(0, scrollHeight + scrollTop);
  }, [chats]);
  return (
    <div
      ref={chatContainerRef}
      className="chat-container"
      style={{
        backgroundColor: "#151516",
        padding: "12px",
        borderRadius: "12px",
        color: "white",
        overflow: "scroll",
        height: "600px",
        width: "100%",
        "overflow-x": "hidden",
      }}
    >
      {chats?.map((el, index) => (
        <p
          key={index}
          style={{
            backgroundColor: "#676A70",
            padding: "1px",
            paddingLeft: "3px",
            borderRadius: "12px",
          }}
        >
          {el}
        </p>
      ))}
    </div>
  );
}
