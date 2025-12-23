'use client';

import React from 'react';
import StatusBar from './StatusBar';

interface ContactsAppProps {
  onClose: () => void;
}

const contacts = [
  { id: '1', name: 'Alaia_Jeanneau', phone: '+33 6 00 00 01 01', emoji: '🥤', color: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)' },
  { id: '2', name: 'Brocoline', phone: '+33 6 66 66 66 66', emoji: '🥦', color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { id: '3', name: 'Giuseppe', phone: '+39 3 00 00 00 00', emoji: '🇮🇹', color: 'linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)' },
  { id: '4', name: 'InesPNJ', phone: '+33 6 42 00 00 00', emoji: '🌿', color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
  { id: '5', name: 'Salistoire', phone: '+33 6 77 77 77 77', emoji: '📞', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
];

export default function ContactsApp({ onClose }: ContactsAppProps) {
  const [selectedContact, setSelectedContact] = React.useState<typeof contacts[0] | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group contacts by first letter
  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const letter = contact.name[0];
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(contact);
    return acc;
  }, {} as Record<string, typeof contacts>);

  if (selectedContact) {
    return (
      <div className="absolute inset-0 bg-black flex flex-col">
        <StatusBar />
        <div className="dynamic-island" />
        
        <div className="pt-14 px-4">
          <button 
            onClick={() => setSelectedContact(null)}
            className="text-ios-blue flex items-center gap-1 text-[17px] mb-4"
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="currentColor">
              <path d="M10.5 1L2 10l8.5 9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Contacts</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center pt-8">
          <div 
            className="w-28 h-28 rounded-full flex items-center justify-center text-5xl mb-4"
            style={{ background: selectedContact.color }}
          >
            {selectedContact.emoji}
          </div>
          <h2 className="text-white text-2xl font-bold">{selectedContact.name}</h2>
          
          <div className="flex gap-4 mt-6">
            <button className="flex flex-col items-center bg-[#2C2C2E] rounded-xl px-6 py-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#34C759">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <span className="text-[#34C759] text-xs mt-1">Appeler</span>
            </button>
            <button className="flex flex-col items-center bg-[#2C2C2E] rounded-xl px-6 py-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span className="text-ios-blue text-xs mt-1">Message</span>
            </button>
            <button className="flex flex-col items-center bg-[#2C2C2E] rounded-xl px-6 py-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#007AFF">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
              <span className="text-ios-blue text-xs mt-1">FaceTime</span>
            </button>
          </div>

          <div className="w-full mt-8 px-4">
            <div className="bg-[#1C1C1E] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-white/10">
                <p className="text-gray-500 text-sm">mobile</p>
                <p className="text-ios-blue text-[17px]">{selectedContact.phone}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">notes</p>
                <p className="text-white text-[17px]">Personnage de la mythologie grecque</p>
              </div>
            </div>
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
      <div className="glass-dark pt-14 pb-4 px-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="text-ios-blue text-[17px]">
            Fermer
          </button>
          <button className="text-ios-blue text-[17px]">
            +
          </button>
        </div>
        <h1 className="text-white text-[34px] font-bold">Contacts</h1>
        <p className="text-gray-400 text-sm mt-1">{contacts.length} contacts</p>
        
        {/* Search Bar */}
        <div className="mt-4 bg-[#1C1C1E] rounded-xl px-4 py-2 flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Rechercher"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-white flex-1 outline-none text-[16px]"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {Object.entries(groupedContacts).map(([letter, contactsGroup]) => (
          <div key={letter}>
            <div className="px-4 py-1 bg-[#1C1C1E] sticky top-0">
              <span className="text-white font-semibold">{letter}</span>
            </div>
            {contactsGroup.map(contact => (
              <div 
                key={contact.id}
                className="conversation-item border-b border-white/5"
                onClick={() => setSelectedContact(contact)}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: contact.color }}
                >
                  {contact.emoji}
                </div>
                <div className="flex-1">
                  <span className="text-white text-[17px]">{contact.name}</span>
                </div>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="#8E8E93">
                  <path d="M1 1l6 6-6 6" stroke="#8E8E93" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="home-indicator" />
    </div>
  );
}
