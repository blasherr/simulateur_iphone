'use client';

import React, { useState, useEffect } from 'react';
import StatusBar from '@/components/StatusBar';
import AppIcon from '@/components/AppIcon';
import MessagesApp from '@/components/MessagesApp';
import PhotosApp from '@/components/PhotosApp';
import ContactsApp from '@/components/ContactsApp';
import SettingsApp from '@/components/SettingsApp';
import PhoneApp from '@/components/PhoneApp';
import { conversations } from '@/data/conversations';

type AppType = 'messages' | 'photos' | 'contacts' | 'settings' | 'phone' | null;

const CORRECT_PIN = '0000';

export default function Home() {
  const [isLocked, setIsLocked] = useState(true);
  const [showPinPad, setShowPinPad] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [openApp, setOpenApp] = useState<AppType>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const totalUnread = conversations.reduce((acc, conv) => acc + conv.unread, 0);

  const handlePinInput = (digit: string) => {
    if (enteredPin.length < 4) {
      const newPin = enteredPin + digit;
      setEnteredPin(newPin);
      setPinError(false);
      
      if (newPin.length === 4) {
        if (newPin === CORRECT_PIN) {
          setTimeout(() => {
            setIsLocked(false);
            setShowPinPad(false);
            setEnteredPin('');
          }, 200);
        } else {
          setPinError(true);
          setTimeout(() => {
            setEnteredPin('');
            setPinError(false);
          }, 500);
        }
      }
    }
  };

  const handlePinDelete = () => {
    setEnteredPin(enteredPin.slice(0, -1));
    setPinError(false);
  };

  const handleUnlock = () => {
    setShowPinPad(true);
  };

  // Lock Screen
  if (isLocked && !showPinPad) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="iphone-frame">
          <div className="iphone-screen relative">
            <div className="wallpaper" />
            <StatusBar />
            <div className="dynamic-island" />
            
            <div className="absolute inset-0 flex flex-col items-center pt-28 z-10">
              <div className="lock-screen-date capitalize">{currentDate}</div>
              <div className="lock-screen-time">{currentTime}</div>
              
              {/* Notifications */}
              <div className="mt-auto mb-32 w-full px-4 space-y-3">
                <div className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      💬
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">Messages</span>
                        <span className="text-white/60 text-xs">maintenant</span>
                      </div>
                      <p className="text-white/80 text-sm">InesPNJ: Un bang 💨</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute bottom-12 left-0 right-0 text-center cursor-pointer"
                onClick={handleUnlock}
              >
                <p className="text-white/60 text-sm animate-pulse">Glisser vers le haut pour déverrouiller</p>
              </div>
            </div>
            
            <div className="home-indicator" onClick={handleUnlock} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </main>
    );
  }

  // PIN Pad Screen
  if (isLocked && showPinPad) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="iphone-frame">
          <div className="iphone-screen relative">
            <div className="wallpaper" />
            <StatusBar />
            <div className="dynamic-island" />
            
            <div className="absolute inset-0 flex flex-col items-center pt-24 z-10">
              <div className="text-white/60 text-sm mb-2">{currentTime}</div>
              <div className="lock-screen-date capitalize text-lg mb-8">{currentDate}</div>
              
              {/* PIN Dots */}
              <div className="flex gap-4 mb-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-150 ${
                      pinError 
                        ? 'border-red-500 bg-red-500' 
                        : enteredPin.length > i 
                          ? 'border-white bg-white' 
                          : 'border-white/50 bg-transparent'
                    } ${pinError ? 'animate-shake' : ''}`}
                  />
                ))}
              </div>
              
              <p className={`text-sm mb-8 ${pinError ? 'text-red-400' : 'text-white/60'}`}>
                {pinError ? 'Code incorrect' : 'Entrez le code'}
              </p>
              
              {/* Number Pad */}
              <div className="grid grid-cols-3 gap-5">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'].map((key, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {key === '' ? (
                      <div className="w-20 h-20" />
                    ) : key === 'del' ? (
                      <button
                        onClick={handlePinDelete}
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white active:bg-white/20 transition-colors"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z"/>
                          <line x1="18" y1="9" x2="12" y2="15"/>
                          <line x1="12" y1="9" x2="18" y2="15"/>
                        </svg>
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePinInput(key)}
                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-white hover:bg-white/20 active:bg-white/30 transition-colors"
                      >
                        <span className="text-3xl font-light">{key}</span>
                        <span className="text-[10px] tracking-widest text-white/60">
                          {key === '1' ? '' : key === '2' ? 'ABC' : key === '3' ? 'DEF' : 
                           key === '4' ? 'GHI' : key === '5' ? 'JKL' : key === '6' ? 'MNO' : 
                           key === '7' ? 'PQRS' : key === '8' ? 'TUV' : key === '9' ? 'WXYZ' : ''}
                        </span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              <button 
                className="mt-8 text-white/60 text-sm"
                onClick={() => setShowPinPad(false)}
              >
                Annuler
              </button>
            </div>
            
            <div className="home-indicator" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="iphone-frame">
        <div className="iphone-screen relative">
          <div className="wallpaper" />
          <StatusBar />
          <div className="dynamic-island" />
          
          {/* Home Screen Apps */}
          {!openApp && (
            <div className="absolute inset-0 pt-20 pb-32 px-6 z-10">
              {/* App Grid - Reduced */}
              <div className="grid grid-cols-4 gap-x-4 gap-y-6 mt-4">
                {/* Row 1 */}
                <AppIcon
                  icon={<span className="text-2xl">📱</span>}
                  label="Téléphone"
                  gradient="linear-gradient(135deg, #34C759 0%, #30B350 100%)"
                  onClick={() => setOpenApp('phone')}
                />
                <AppIcon
                  icon={<span className="text-2xl">💬</span>}
                  label="Messages"
                  gradient="linear-gradient(135deg, #34C759 0%, #30D158 100%)"
                  onClick={() => setOpenApp('messages')}
                  badge={totalUnread}
                />
                <AppIcon
                  icon={<span className="text-2xl">📷</span>}
                  label="Appareil"
                  gradient="linear-gradient(135deg, #8E8E93 0%, #636366 100%)"
                />
                <AppIcon
                  icon={<span className="text-2xl">🖼️</span>}
                  label="Photos"
                  gradient="linear-gradient(135deg, #FF9500 0%, #FFCC00 50%, #34C759 100%)"
                  onClick={() => setOpenApp('photos')}
                />
                
                {/* Row 2 */}
                <AppIcon
                  icon={<span className="text-2xl">🧭</span>}
                  label="Safari"
                  gradient="linear-gradient(135deg, #007AFF 0%, #0055FF 100%)"
                />
                <AppIcon
                  icon={<span className="text-2xl">🗺️</span>}
                  label="Plans"
                  gradient="linear-gradient(135deg, #34C759 0%, #00C7BE 100%)"
                />
                <AppIcon
                  icon={<span className="text-2xl">⚙️</span>}
                  label="Réglages"
                  gradient="linear-gradient(135deg, #8E8E93 0%, #636366 100%)"
                  onClick={() => setOpenApp('settings')}
                />
                <AppIcon
                  icon={<span className="text-2xl">👤</span>}
                  label="Contacts"
                  gradient="linear-gradient(135deg, #5856D6 0%, #AF52DE 100%)"
                  onClick={() => setOpenApp('contacts')}
                />
              </div>

              {/* Page Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
            </div>
          )}

          {/* Dock */}
          {!openApp && (
            <div className="dock">
              <div 
                className="app-icon cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #34C759 0%, #30B350 100%)', width: '50px', height: '50px' }}
                onClick={() => setOpenApp('phone')}
              >
                <span className="text-xl">📱</span>
              </div>
              <div 
                className="app-icon cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #007AFF 0%, #0055FF 100%)', width: '50px', height: '50px' }}
              >
                <span className="text-xl">🧭</span>
              </div>
              <div 
                className="app-icon cursor-pointer relative"
                style={{ background: 'linear-gradient(135deg, #34C759 0%, #30D158 100%)', width: '50px', height: '50px' }}
                onClick={() => setOpenApp('messages')}
              >
                <span className="text-xl">💬</span>
                {totalUnread > 0 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {totalUnread}
                  </div>
                )}
              </div>
              <div 
                className="app-icon cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #8E8E93 0%, #636366 100%)', width: '50px', height: '50px' }}
                onClick={() => setOpenApp('settings')}
              >
                <span className="text-xl">⚙️</span>
              </div>
            </div>
          )}

          {/* Open Apps */}
          {openApp === 'messages' && <MessagesApp onClose={() => setOpenApp(null)} />}
          {openApp === 'photos' && <PhotosApp onClose={() => setOpenApp(null)} />}
          {openApp === 'contacts' && <ContactsApp onClose={() => setOpenApp(null)} />}
          {openApp === 'settings' && <SettingsApp onClose={() => setOpenApp(null)} />}
          {openApp === 'phone' && <PhoneApp onClose={() => setOpenApp(null)} />}

          <div className="home-indicator" onClick={() => setOpenApp(null)} style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </main>
  );
}
