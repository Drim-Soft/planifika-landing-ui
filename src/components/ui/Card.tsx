import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export function Card({ children, className, padding = 'md', style }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={clsx(
        'bg-white rounded-lg shadow-sm border border-gray-200 transition-shadow hover:shadow-md',
        paddingClasses[padding],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}