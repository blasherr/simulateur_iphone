'use client';

import React from 'react';
import StatusBar from './StatusBar';

interface PhoneAppProps {
  onClose: () => void;
}

const recentCalls = [
  { id: '1', name: 'InesPNJ', type: 'missed', time: 'Hier', emoji: '🌿' },
  { id: '2', name: 'Giuseppe', type: 'incoming', time: 'Hier', emoji: '🇮🇹' },
  { id: '3', name: 'Salistoire', type: 'outgoing', time: 'Lundi', emoji: '📞' },
  { id: '4', name: 'Alaia_Jeanneau', type: 'incoming', time: '20/12', emoji: '🥤' },
  { id: '5', name: 'Brocoline', type: 'missed', time: '19/12', emoji: '🥦' },
];

const favorites = [
  { id: '1', name: 'Giuseppe', emoji: '🇮🇹', label: 'mobile' },
  { id: '2', name: 'InesPNJ', emoji: '🌿', label: 'mobile' },
];

export default function PhoneApp({ onClose }: PhoneAppProps) {
  const [activeTab, setActiveTab] = React.useState('recents');

  return (
    <div className="absolute inset-0 bg-black flex flex-col app-open">
      <StatusBar />
      <div className="dynamic-island" />
      
      {/* Header */}
      <div className="glass-dark pt-14 pb-4 px-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="text-ios-blue text-[17px]">
            Fermer
          </button>
          <span className="text-white font-semibold">Téléphone</span>
          <div className="w-16" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'favorites' && (
          <div className="px-4 py-4">
            <h2 className="text-white text-xl font-bold mb-4">Favoris</h2>
            {favorites.map(fav => (
              <div key={fav.id} className="flex items-center gap-4 py-3 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-2xl">
                  {fav.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">{fav.name}</p>
                  <p className="text-gray-500 text-sm">{fav.label}</p>
                </div>
                <button className="text-ios-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v8M8 12h8"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'recents' && (
          <div className="px-4 py-4">
            <h2 className="text-white text-xl font-bold mb-4">Récents</h2>
            {recentCalls.map(call => (
              <div key={call.id} className="flex items-center gap-4 py-3 border-b border-white/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${call.type === 'missed' ? 'bg-red-500/20' : 'bg-[#2C2C2E]'}`}>
                  {call.emoji}
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${call.type === 'missed' ? 'text-red-500' : 'text-white'}`}>{call.name}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    {call.type === 'missed' && <span>Manqué</span>}
                    {call.type === 'incoming' && (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>
                        </svg>
                        <span>Entrant</span>
                      </>
                    )}
                    {call.type === 'outgoing' && (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
                        </svg>
                        <span>Sortant</span>
                      </>
                    )}
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{call.time}</span>
                <button className="text-ios-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'keypad' && (
          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <div className="text-white text-3xl font-light mb-8 h-10"></div>
            <div className="grid grid-cols-3 gap-4">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(key => (
                <button 
                  key={key}
                  className="w-20 h-20 rounded-full bg-[#333] text-white text-3xl font-light flex items-center justify-center hover:bg-[#444] transition-colors"
                >
                  {key}
                </button>
              ))}
            </div>
            <button className="mt-8 w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Tab Bar */}
      <div className="glass-dark border-t border-white/10 py-2 pb-8 px-6">
        <div className="flex justify-around">
          <button 
            className={`flex flex-col items-center ${activeTab === 'favorites' ? 'text-ios-blue' : 'text-gray-500'}`}
            onClick={() => setActiveTab('favorites')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="text-xs mt-1">Favoris</span>
          </button>
          <button 
            className={`flex flex-col items-center ${activeTab === 'recents' ? 'text-ios-blue' : 'text-gray-500'}`}
            onClick={() => setActiveTab('recents')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
            </svg>
            <span className="text-xs mt-1">Récents</span>
          </button>
          <button 
            className={`flex flex-col items-center ${activeTab === 'contacts' ? 'text-ios-blue' : 'text-gray-500'}`}
            onClick={() => setActiveTab('contacts')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span className="text-xs mt-1">Contacts</span>
          </button>
          <button 
            className={`flex flex-col items-center ${activeTab === 'keypad' ? 'text-ios-blue' : 'text-gray-500'}`}
            onClick={() => setActiveTab('keypad')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="text-xs mt-1">Clavier</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 11c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2zm-1-4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm-3 8.35c-1.36.7-2.42 1.95-2.82 3.48l-.18.67h-1.54c-.05-.2-.12-.4-.18-.67-.4-1.53-1.46-2.78-2.82-3.48-.3-.15-.56-.33-.79-.54-.05.48-.08.96-.08 1.44v.75c0 4.42 3.58 8 8 8h.75c.48 0 .96-.03 1.44-.08-.21-.23-.39-.49-.54-.79zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>
            <span className="text-xs mt-1">Messagerie</span>
          </button>
        </div>
      </div>
      <div className="home-indicator" />
    </div>
  );
}
