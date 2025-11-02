import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { API_CONFIG } from '../constants';
import './Chatbot.css';

const Chatbot = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm a chatbot that can answer questions about Pranava. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Expose methods to parent component through ref
  useImperativeHandle(ref, () => ({
    openChatbot: () => setIsOpen(true),
    closeChatbot: () => setIsOpen(false),
    toggleChatbot: () => setIsOpen(prev => !prev)
  }));

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(API_CONFIG.CHATBOT_CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage
        })
      });
      console.log("response:", response);

      if (!response.ok) {
        // Try to get error details from the response
        const errorData = await response.json().catch(() => null);
        const errorMessage = errorData?.message || `Server returned ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      // Handle the correct response format from your API
      const botMessage = {
        id: Date.now() + 1,
        text: data.bot_response || data.message || "I'm sorry, I couldn't process your request right now.",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
      
      let errorText = "I'm sorry, I'm having trouble right now. ";
      
      if (error.message.includes('Failed to fetch')) {
        errorText += `The chatbot is undergoing maintenance or is currently unreachable. Please try again later.`;
      } else if (error.message.includes('Chatbot not initialized')) {
        errorText += "The chatbot is undergoing maintenance or is currently unreachable. Please try again later.";
      } else if (error.message.includes('Invalid request') || error.message.includes('Empty message')) {
        errorText += "There was an issue with your message format.";
      } else {
        errorText += error.message || "Please try again later.";
      }
      
      const errorMessage = {
        id: Date.now() + 1,
        text: errorText,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chatbot-container">
      {/* Floating Chat Icon */}
      <div 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChatbot}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <h4>Pranava Assistant</h4>
              <span className="chatbot-status">Online</span>
            </div>
            <button className="chatbot-close" onClick={toggleChatbot}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <div className="input-container">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Pranava..."
                rows="1"
                disabled={isLoading}
              />
              <button 
                onClick={sendMessage} 
                disabled={!inputMessage.trim() || isLoading}
                className="send-button"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Chatbot;