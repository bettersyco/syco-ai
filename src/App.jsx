import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      { role: "user", text: message },
      {
        role: "assistant",
        text: "Hey! I'm Syco AI. The chat interface is ready. We'll connect the AI brain next!",
      },
    ]);

    setMessage("");
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">SYCO<span> AI</span></h2>
        <button className="new-chat" onClick={() => setMessages([])}>
          + New chat
        </button>
        <div className="sidebar-bottom">Powered by Syco</div>
      </aside>

      <main className="main">
        <header className="topbar">
          <span>Syco AI</span>
          <span className="status">● Online</span>
        </header>

        <section className="chat">
          {messages.length === 0 ? (
            <div className="welcome">
              <h1>What are we building today?</h1>
              <p>Your AI coding assistant is ready.</p>
              <div className="suggestions">
                <button onClick={() => setMessage("Explain this code to me")}>
                  Explain code
                </button>
                <button onClick={() => setMessage("Help me fix an error")}>
                  Fix an error
                </button>
                <button onClick={() => setMessage("Generate a website")}>
                  Generate code
                </button>
              </div>
            </div>
          ) : (
            <div className="messages">
              {messages.map((item, index) => (
                <div className={`message ${item.role}`} key={index}>
                  <strong>{item.role === "user" ? "You" : "Syco AI"}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="input-area">
          <div className="input-box">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask Syco AI anything about coding..."
            />
            <button onClick={sendMessage}>↑</button>
          </div>
          <p className="disclaimer">Syco AI can make mistakes. Check important code.</p>
        </div>
      </main>
    </div>
  );
}

export default App;