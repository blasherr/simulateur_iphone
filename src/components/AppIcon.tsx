'use client';

import React from 'react';

interface AppIconProps {
  icon: React.ReactNode;
  label: string;
  gradient: string;
  onClick?: () => void;
  badge?: number;
}

export default function AppIcon({ icon, label, gradient, onClick, badge }: AppIconProps) {
  return (
    <div className="flex flex-col items-center gap-1" onClick={onClick}>
      <div 
        className="app-icon relative"
        style={{ background: gradient }}
      >
        {icon}
        {badge && badge > 0 && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1">
            {badge > 99 ? '99+' : badge}
          </div>
        )}
      </div>
      <span className="text-white text-xs font-medium drop-shadow-md">{label}</span>
    </div>
  );
}
