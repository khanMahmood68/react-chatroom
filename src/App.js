import "./App.css";
import {
  getDatabase,
  ref,
  push,
  set,
  onChildAdded,
  addCommentElement,
} from "firebase/database";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: message,
    });
    // // const c = [...chats,{ name: name, message: message }];

    // // OR

    // const c = [...chats];
    // c.push({ name: name, message: message });
    // setChats(c);
    setMessage("");
  };
  return (
    <div>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="Enter name to start chat"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
      )}

      {name ? (
        <div>
          <h3>User:{name}</h3>
          <div className="chat-container">
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>{c.name}:</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              value={message}
              placeholder="Enter your chat"
              onInput={(e) => setMessage(e.target.value)}
            />
            <button onClick={(e) => sendChat()}>Send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
