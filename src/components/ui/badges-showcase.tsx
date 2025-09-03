import React from 'react';
import { Badge } from './badge';

interface BadgeItem {
  emoji: string;
  name: string;
  description: string;
  earned: boolean;
}

const badges: BadgeItem[] = [
  { emoji: '🏆', name: 'Quick Responder', description: 'Complete emergency drill under 2 minutes', earned: true },
  { emoji: '🛡️', name: 'Campus Hero', description: 'Help 10 fellow students in drills', earned: true },
  { emoji: '🔥', name: 'Fire Safety Expert', description: 'Master all fire safety modules', earned: false },
  { emoji: '🌊', name: 'Flood Guardian', description: 'Complete flood preparedness training', earned: true },
  { emoji: '🌋', name: 'Earthquake Survivor', description: 'Excel in earthquake response drills', earned: false },
  { emoji: '⚡', name: 'Lightning Fast', description: 'Complete all modules in record time', earned: false },
];

export const BadgesShowcase: React.FC = () => {
  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold mb-4 text-gradient-energy">
        🏅 Achievement Badges
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border transition-all duration-300 ${
              badge.earned
                ? 'bg-primary/10 border-primary/30 glow-blue'
                : 'bg-muted/10 border-muted/30 opacity-60'
            }`}
          >
            <div className="text-center">
              <div className={`text-3xl mb-2 ${badge.earned ? 'animate-pulse' : 'grayscale'}`}>
                {badge.emoji}
              </div>
              <div className="font-semibold text-sm mb-1">
                {badge.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {badge.description}
              </div>
              {badge.earned && (
                <Badge variant="secondary" className="mt-2 text-xs bg-primary/20 text-primary">
                  Earned
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};