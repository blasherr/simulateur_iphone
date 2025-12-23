'use client';

import React from 'react';
import StatusBar from './StatusBar';

interface PhotosAppProps {
  onClose: () => void;
}

const dummyPhotos = [
  { id: 1, color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', emoji: '🏛️' },
  { id: 2, color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', emoji: '🌅' },
  { id: 3, color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', emoji: '🏔️' },
  { id: 4, color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', emoji: '🌊' },
  { id: 5, color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', emoji: '🌺' },
  { id: 6, color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', emoji: '🦋' },
  { id: 7, color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', emoji: '🌸' },
  { id: 8, color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', emoji: '🌻' },
  { id: 9, color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', emoji: '☁️' },
  { id: 10, color: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)', emoji: '🌙' },
  { id: 11, color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', emoji: '🐚' },
  { id: 12, color: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)', emoji: '⭐' },
];

export default function PhotosApp({ onClose }: PhotosAppProps) {
  const [selectedPhoto, setSelectedPhoto] = React.useState<typeof dummyPhotos[0] | null>(null);

  if (selectedPhoto) {
    return (
      <div className="absolute inset-0 bg-black flex flex-col">
        <StatusBar />
        <div className="dynamic-island" />
        
        <div className="flex-1 flex items-center justify-center p-4">
          <div 
            className="w-full aspect-square rounded-3xl flex items-center justify-center text-8xl"
            style={{ background: selectedPhoto.color }}
          >
            {selectedPhoto.emoji}
          </div>
        </div>
        
        <div className="p-4 pb-8">
          <button 
            onClick={() => setSelectedPhoto(null)}
            className="w-full bg-white/10 text-white py-3 rounded-xl font-semibold"
          >
            Retour
          </button>
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
            Sélect.
          </button>
        </div>
        <h1 className="text-white text-[34px] font-bold">Photos</h1>
        <p className="text-gray-400 text-sm mt-1">{dummyPhotos.length} photos</p>
      </div>

      {/* Photos Grid */}
      <div className="flex-1 overflow-y-auto p-1">
        <div className="grid grid-cols-3 gap-1">
          {dummyPhotos.map(photo => (
            <div 
              key={photo.id}
              className="aspect-square rounded-sm flex items-center justify-center text-4xl cursor-pointer hover:opacity-80 transition-opacity"
              style={{ background: photo.color }}
              onClick={() => setSelectedPhoto(photo)}
            >
              {photo.emoji}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="glass-dark border-t border-white/10 py-2 pb-8 px-6">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-ios-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            <span className="text-xs mt-1">Bibliothèque</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-xs mt-1">Pour vous</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
            <span className="text-xs mt-1">Albums</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <span className="text-xs mt-1">Rechercher</span>
          </button>
        </div>
      </div>
      <div className="home-indicator" />
    </div>
  );
}
