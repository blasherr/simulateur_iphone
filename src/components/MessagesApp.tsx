'use client';

import React, { useState, useRef, useEffect } from 'react';
import { conversations, Conversation, Message } from '@/data/conversations';
import StatusBar from './StatusBar';

interface MessagesAppProps {
  onClose: () => void;
}

export default function MessagesApp({ onClose }: MessagesAppProps) {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [localConversations, setLocalConversations] = useState(conversations);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (selectedConversation) {
      scrollToBottom();
    }
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || !selectedConversation) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
    };

    const updatedConversations = localConversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
          lastMessage: inputValue,
          timestamp: 'À l\'instant',
        };
      }
      return conv;
    });

    setLocalConversations(updatedConversations);
    setSelectedConversation(prev => prev ? {
      ...prev,
      messages: [...prev.messages, newMessage],
    } : null);
    setInputValue('');
    setTimeout(scrollToBottom, 100);
  };

  const totalUnread = localConversations.reduce((acc, conv) => acc + conv.unread, 0);

  if (selectedConversation) {
    return (
      <div className="absolute inset-0 bg-black flex flex-col app-open">
        <StatusBar />
        <div className="dynamic-island" />
        
        {/* Header */}
        <div className="glass-dark pt-14 pb-2 px-4 flex items-center gap-3 border-b border-white/10">
          <button 
            onClick={() => setSelectedConversation(null)}
            className="text-ios-blue flex items-center gap-1 text-[17px]"
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor">
              <path d="M10.5 1L2 10l8.5 9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Retour</span>
          </button>
          <div className="flex-1 flex flex-col items-center">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ background: selectedConversation.avatarColor }}
            >
              {selectedConversation.avatar}
            </div>
            <span className="text-white font-semibold text-sm mt-1">{selectedConversation.name}</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          {selectedConversation.messages.map((message, index) => (
            <div key={message.id} className="flex flex-col">
              {(index === 0 || 
                selectedConversation.messages[index - 1].isSent !== message.isSent) && (
                <span className={`text-xs text-gray-500 mb-1 ${message.isSent ? 'text-right' : 'text-left'}`}>
                  {message.timestamp}
                </span>
              )}
              <div className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}>
                <div className={`message-bubble ${message.isSent ? 'message-sent' : 'message-received'}`}>
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="glass-dark p-3 pb-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button className="text-ios-blue p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </button>
            <div className="flex-1 bg-[#1C1C1E] border border-white/10 rounded-full px-4 py-2 flex items-center transition-all focus-within:border-ios-blue/50 focus-within:bg-[#2C2C2E]">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="iMessage"
                className="bg-transparent text-white flex-1 outline-none text-[16px]"
              />
            </div>
            {inputValue.trim() ? (
              <button 
                onClick={handleSendMessage}
                className="bg-ios-blue rounded-full p-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            ) : (
              <button className="text-ios-blue p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="home-indicator" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-black flex flex-col app-open">
      <StatusBar />
      <div className="dynamic-island" />
      
      {/* Header */}
      <div className="glass-dark pt-14 pb-4 px-4 z-10 sticky top-0">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="text-ios-blue text-[17px]">
            Fermer
          </button>
          <button className="text-ios-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </button>
        </div>
        <h1 className="text-white text-[34px] font-bold">Messages</h1>
        {totalUnread > 0 && (
          <p className="text-gray-400 text-sm mt-1">{totalUnread} non lu{totalUnread > 1 ? 's' : ''}</p>
        )}
        
        {/* Search Bar */}
        <div className="mt-4 bg-[#1C1C1E]/80 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2 transition-colors focus-within:bg-[#2C2C2E]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Rechercher"
            className="bg-transparent text-white flex-1 outline-none text-[16px]"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {localConversations.map(conversation => (
          <div 
            key={conversation.id}
            className="conversation-item border-b border-white/5 p-3 flex items-center gap-3 active-scale cursor-pointer"
            onClick={() => {
              setSelectedConversation(conversation);
              // Clear unread
              setLocalConversations(prev => prev.map(c => 
                c.id === conversation.id ? { ...c, unread: 0 } : c
              ));
            }}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg"
              style={{ background: conversation.avatarColor }}
            >
              {conversation.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-[17px]">{conversation.name}</span>
                <span className="text-gray-500 text-[15px]">{conversation.timestamp}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-[15px] truncate">{conversation.lastMessage}</p>
                {conversation.unread > 0 && (
                  <div className="bg-ios-blue text-white text-xs font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1.5 ml-2">
                    {conversation.unread}
                  </div>
                )}
              </div>
            </div>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="#8E8E93" className="ml-2">
              <path d="M1 1l6 6-6 6" stroke="#8E8E93" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>
      <div className="home-indicator" />
    </div>
  );
}
