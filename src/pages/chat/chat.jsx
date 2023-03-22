import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../../Components/NavBar/navbar";
function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // dummy var to cause useEffect to be called each time this variable changes
  // this variable is used to do the scolling behaviour after new messages arrive
  const [dummy, setDummy] = useState(0);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  useEffect(() => {
    // scrool to the bottom when there are new messages
    const scrollableDiv = scrollRef.current;
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  }, [dummy]);
  // to set up event listeners
  useEffect(() => {
    function handleKeyPress(event) {
      if (
        event.key === "Enter" &&
        inputRef.current === document.activeElement &&
        inputRef.current.value !== ""
      ) {
        buttonRef.current.click();
      }
    }
    // add keyboard listener
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      // remove keyboadr listener
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== "") {
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setDummy((prev) => !prev);
      setNewMessage("");
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="chat-page flex w-100 mt-0">
        {/*<div className="info-column flex-column"></div>*/}
        <div className="chat-column w-100 mx-0">
          <div className="messages flex-column w-100 p-5" ref={scrollRef}>
            {messages.map((message) => (
              <>
                <div className="mt-10 message message-received">
                  <div className="message-content">
                    <p>Hello</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse">
                  <div className="message-sent ">
                    <div className="message-content">
                      <p> {message} </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="send-wrapper">
            <input
              ref={inputRef}
              value={newMessage}
              className="chat-input"
              onChange={handleNewMessageChange}
              placeholder="text ..."
            />
            <button
              ref={buttonRef}
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
