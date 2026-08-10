"use client";

import React, { useState, useEffect } from "react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowWidget(true);
      } else {
        setShowWidget(false);
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  if (!showWidget) return null;

  return (
    <div className="whatsapp-widget-container">
      {isOpen ? (
        <div className="whatsapp-chat-window">
          <div className="whatsapp-chat-header">
            <div className="whatsapp-header-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp</span>
            </div>
            <button className="whatsapp-close-btn" onClick={toggleChat} aria-label="Close chat">
              ✕
            </button>
          </div>
          
          <div className="whatsapp-chat-body">
            <div className="whatsapp-message">
              Hi 👋, welcome to <strong>Vinfra Trussless Roofings</strong> - Innovative & Durable Roofing Solutions
            </div>
            <div className="whatsapp-message">
              Can we help you?
            </div>
          </div>

          <div className="whatsapp-chat-footer">
            <a
              href="https://wa.me/917618739515"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-open-chat-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
              >
                 <line x1="22" y1="2" x2="11" y2="13"></line>
                 <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Open Chat
            </a>
          </div>
        </div>
      ) : (
        <button
          className="whatsapp-floating-btn"
          aria-label="Chat with us on WhatsApp"
          onClick={toggleChat}
        >
          <img 
            src="/wp.webp" 
            alt="WhatsApp" 
            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
          />
        </button>
      )}
    </div>
  );
}
