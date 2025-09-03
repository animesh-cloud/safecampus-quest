import React from 'react';

interface FloatingIcon {
  emoji: string;
  delay: number;
  duration: number;
  x: number;
  y: number;
}

const floatingIcons: FloatingIcon[] = [
  { emoji: '🌋', delay: 0, duration: 6, x: 10, y: 20 },
  { emoji: '🌊', delay: 2, duration: 8, x: 80, y: 30 },
  { emoji: '🔥', delay: 4, duration: 7, x: 20, y: 70 },
  { emoji: '🏠', delay: 1, duration: 9, x: 70, y: 80 },
  { emoji: '🚨', delay: 3, duration: 6, x: 90, y: 60 },
  { emoji: '🛡️', delay: 5, duration: 8, x: 30, y: 40 },
];

export const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-float opacity-20 hover:opacity-40 transition-opacity duration-500"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
          }}
        >
          <span className="filter drop-shadow-lg">{icon.emoji}</span>
        </div>
      ))}
    </div>
  );
};