import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                <div className="message message-received">
                  <div className="message-content">
                    <p>Hello! This is a received message.</p>
                  </div>
                </div>

                <div className="message-sent">
                  <div className="message-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
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
