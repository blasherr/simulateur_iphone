'use client';

import React from 'react';
import StatusBar from './StatusBar';

interface SettingsAppProps {
  onClose: () => void;
}

const settingsItems = [
  { id: 'wifi', icon: '📶', label: 'Wi-Fi', value: 'Labyrinthe_5G', color: '#007AFF' },
  { id: 'bluetooth', icon: '🔵', label: 'Bluetooth', value: 'Activé', color: '#007AFF' },
  { id: 'cellular', icon: '📱', label: 'Données cellulaires', value: 'Activé', color: '#34C759' },
  { id: 'hotspot', icon: '🔗', label: 'Partage de connexion', value: 'Désactivé', color: '#34C759' },
  { id: 'vpn', icon: '🔒', label: 'VPN', value: 'Non connecté', color: '#007AFF' },
];

const settingsItems2 = [
  { id: 'notif', icon: '🔔', label: 'Notifications', color: '#FF3B30' },
  { id: 'sounds', icon: '🔊', label: 'Sons et vibrations', color: '#FF2D55' },
  { id: 'focus', icon: '🌙', label: 'Concentration', color: '#5856D6' },
  { id: 'screen', icon: '⏰', label: 'Temps d\'écran', color: '#5856D6' },
];

const settingsItems3 = [
  { id: 'general', icon: '⚙️', label: 'Général', color: '#8E8E93' },
  { id: 'display', icon: '☀️', label: 'Luminosité et affichage', color: '#007AFF' },
  { id: 'wallpaper', icon: '🖼️', label: 'Fond d\'écran', color: '#5AC8FA' },
  { id: 'accessibility', icon: '♿', label: 'Accessibilité', color: '#007AFF' },
  { id: 'privacy', icon: '🤚', label: 'Confidentialité', color: '#007AFF' },
];

export default function SettingsApp({ onClose }: SettingsAppProps) {
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
          <div className="w-16" />
        </div>
        <h1 className="text-white text-[34px] font-bold">Réglages</h1>
      </div>

      {/* Settings List */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Profile */}
        <div className="bg-[#1C1C1E] rounded-xl mb-6 p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-800 to-black flex items-center justify-center text-3xl">
            🐂
          </div>
          <div>
            <p className="text-white text-lg font-semibold">LE MINOTAURE</p>
            <p className="text-gray-400 text-sm">Apple ID, iCloud+, contenu et achats</p>
          </div>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="#8E8E93" className="ml-auto">
            <path d="M1 1l6 6-6 6" stroke="#8E8E93" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Network Settings */}
        <div className="bg-[#1C1C1E] rounded-xl mb-6 overflow-hidden">
          {settingsItems.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-center gap-4 p-3 ${index < settingsItems.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: item.color }}>
                {item.icon}
              </div>
              <span className="text-white flex-1">{item.label}</span>
              <span className="text-gray-500 text-sm">{item.value}</span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="#8E8E93">
                <path d="M1 1l6 6-6 6" stroke="#8E8E93" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Notifications */}
        <div className="bg-[#1C1C1E] rounded-xl mb-6 overflow-hidden">
          {settingsItems2.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-center gap-4 p-3 ${index < settingsItems2.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: item.color }}>
                {item.icon}
              </div>
              <span className="text-white flex-1">{item.label}</span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="#8E8E93">
                <path d="M1 1l6 6-6 6" stroke="#8E8E93" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>

        {/* General */}
        <div className="bg-[#1C1C1E] rounded-xl mb-6 overflow-hidden">
          {settingsItems3.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-center gap-4 p-3 ${index < settingsItems3.length - 1 ? 'border-b border-white/10' : ''}`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg" style={{ background: item.color }}>
                {item.icon}
              </div>
              <span className="text-white flex-1">{item.label}</span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="#8E8E93">
                <path d="M1 1l6 6-6 6" stroke="#8E8E93" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Version */}
        <div className="text-center text-gray-500 text-sm pb-8">
          <p>iOS 26.1</p>
          <p>iPhone 17 Pro Max</p>
        </div>
      </div>
      <div className="home-indicator" />
    </div>
  );
}
