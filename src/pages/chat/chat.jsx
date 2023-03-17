import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/logo.png";

import React, { useState } from "react";
import "./chat.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../../Components/NavBar/navbar";
function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <>
    <NavBar></NavBar>
      <div className="chat-page flex m-14 mt-0">
        {/*<div className="info-column flex-column"></div>*/}
        <div className="chat-column">
          <div className="messages flex-column p-5">
            {messages.map((message, index) => (
              <>
                <div class="message">
                  <div class="message-content">
                    <p>Hello! This is a received message.</p>
                  </div>
                </div>

                <div class="message message-sent">
                  <div class="message-content">
                    <p>Hi! This is a sent message.</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="send-wrapper">
            <input
              value={newMessage}
              className="chat-input"
              onChange={handleNewMessageChange}
              placeholder="text ..."
            />
            <button
              className="send-btn"
              type="button"
              onClick={handleSendMessage}
            >
              <FontAwesomeIcon icon={faPaperPlane} color="#240046" />
            </button>
          </div>
        </div>

        <div />
      </div>
    </>
  );
}

export { ChatPage };
