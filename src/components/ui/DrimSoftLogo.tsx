import React from 'react';

interface DrimSoftLogoProps {
  className?: string;
  size?: number;
}

export function DrimSoftLogo({ className = "", size = 20 }: DrimSoftLogoProps) {
  return (
    <img
      src="/src/assets/DrimSoft logo.png"
      alt="DrimSoft Logo"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
