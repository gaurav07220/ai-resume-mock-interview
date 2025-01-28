import React, { useState } from "react";
import axios from "axios";
import "./style.scss";

const InterviewSimulator = () => {
  const [conversation, setConversation] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const jobDescription = `
    We are looking for a skilled Frontend Developer with expertise in JavaScript, React, and TypeScript.
    The candidate should have experience in building responsive web applications and a strong understanding
    of Redux, API integrations, and testing frameworks like Jest.
  `;

  const initialQuestion = `
    Welcome to the Interview Simulator! This interview is based on the following job description:
    "${jobDescription}"
    Let's start! Can you briefly introduce yourself and your experience related to frontend development?
  `;

  const askQuestion = async (inputText) => {
    try {
      setLoading(true);
      setError("");

      const options = {
        method: "POST",
        url: "https://chat-gpt26.p.rapidapi.com/",
        headers: {
          "x-rapidapi-key": "3c215a1a58msh1ee659f66c7f104p12038djsnce1cde1ae947",
          "x-rapidapi-host": "chat-gpt26.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          model: "gpt-3.5-turbo",
          messages: [
            ...conversation.map((c) => ({ role: "user", content: c.user })),
            { role: "user", content: inputText || initialQuestion },
          ],
        },
      };

      const response = await axios.request(options);
      const botResponse =
        response.data?.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
      setConversation((prev) => [...prev, { user: inputText, bot: botResponse }]);
    } catch (err) {
      console.error(err);
      setError("The service is currently unavailable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSend = () => {
    if (userInput.trim()) {
      askQuestion(userInput);
      setUserInput(""); // Clear input field
    }
  };

  React.useEffect(() => {
    askQuestion();
  }, []);

  return (
    <div className="interview-simulator">
      <header className="header">
        <h1>Interview Simulator</h1>
        <p>Practice your interview skills based on a real job description.</p>
      </header>

      <main className="main">
        <div className="conversation-container">
          {conversation.length === 0 && <p className="info-text">Your conversation will appear here...</p>}
          {conversation.map((chat, index) => (
            <div key={index} className={`chat-bubble ${index % 2 === 0 ? "bot" : "user"}`}>
              <p className="chat-text">
                <strong>{index % 2 === 0 ? "Bot:" : "You:"}</strong> {chat.bot || chat.user}
              </p>
            </div>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

        <div className="input-section">
          <textarea
            value={userInput}
            onChange={handleUserInput}
            placeholder="Type your response..."
            rows="4"
            className="input-box"
          ></textarea>
          <button className="send-button" onClick={handleSend} disabled={loading}>
            {loading ? "Loading..." : "Send"}
          </button>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Interview Simulator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InterviewSimulator;
