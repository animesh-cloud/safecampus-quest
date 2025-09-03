import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './badge';
import { useGameState } from '@/hooks/useGameState';

interface BadgeItem {
  emoji: string;
  name: string;
  description: string;
  earned: boolean;
}

export const BadgesShowcase: React.FC = () => {
  const { progress } = useGameState();
  
  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold mb-4 text-gradient-energy">
        🏅 Achievement Badges
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {progress.badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: badge.unlocked ? 1.05 : 1 }}
            className={`p-4 rounded-xl border transition-all duration-300 ${
              badge.unlocked
                ? 'bg-primary/10 border-primary/30 glow-blue'
                : 'bg-muted/10 border-muted/30 opacity-60'
            }`}
          >
            <div className="text-center">
              <motion.div 
                className={`text-3xl mb-2 ${badge.unlocked ? '' : 'grayscale'}`}
                animate={badge.unlocked ? { 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0] 
                } : {}}
                transition={{ 
                  duration: 0.5, 
                  repeat: badge.unlocked ? Infinity : 0, 
                  repeatDelay: 3 
                }}
              >
                {badge.emoji}
              </motion.div>
              <div className="font-semibold text-sm mb-1">
                {badge.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {badge.description}
              </div>
              {badge.unlocked && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge variant="secondary" className="mt-2 text-xs bg-primary/20 text-primary">
                    Earned
                  </Badge>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};