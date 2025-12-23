'use client';

import React from 'react';

interface StatusBarProps {
  dark?: boolean;
}

export default function StatusBar({ dark = false }: StatusBarProps) {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`status-bar ${dark ? 'text-black' : 'text-white'}`}>
      <div className="w-[90px]">
        <span className="font-semibold">{time}</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-1 w-[90px] justify-end">
        {/* Signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="6" width="3" height="6" rx="1" opacity="0.3"/>
          <rect x="5" y="4" width="3" height="8" rx="1" opacity="0.5"/>
          <rect x="10" y="2" width="3" height="10" rx="1" opacity="0.8"/>
          <rect x="15" y="0" width="3" height="12" rx="1"/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2.4c2.7 0 5.2 1 7.1 2.7.3.3.3.7 0 1-.3.3-.7.3-1 0C12.5 4.6 10.4 3.8 8 3.8S3.5 4.6 1.9 6.1c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1C2.8 3.4 5.3 2.4 8 2.4zm0 3c1.8 0 3.5.7 4.7 1.8.3.3.3.7 0 1-.3.3-.7.3-1 0-1-.9-2.3-1.4-3.7-1.4s-2.7.5-3.7 1.4c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1C4.5 6.1 6.2 5.4 8 5.4zm0 3c1 0 1.9.4 2.5 1 .3.3.3.7 0 1-.3.3-.7.3-1 0-.4-.4-1-.6-1.5-.6s-1.1.2-1.5.6c-.3.3-.7.3-1 0-.3-.3-.3-.7 0-1 .6-.6 1.5-1 2.5-1zM8 11.4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"/>
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-0.5">
          <div className="w-[25px] h-[12px] border-2 border-current rounded-[4px] relative">
            <div className="absolute inset-[2px] right-[2px] bg-green-500 rounded-[1px]" style={{width: '85%'}}/>
          </div>
          <div className="w-[2px] h-[5px] bg-current rounded-r-sm"/>
        </div>
      </div>
    </div>
  );
}
