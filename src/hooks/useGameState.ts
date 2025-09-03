import { useState, useEffect } from 'react';

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface UserProgress {
  score: number;
  level: number;
  streak: number;
  badges: Badge[];
  completedModules: string[];
}

const initialBadges: Badge[] = [
  { id: 'quick_responder', name: 'Quick Responder', emoji: '🏆', description: 'Complete first quiz under 2 minutes', unlocked: false },
  { id: 'campus_hero', name: 'Campus Hero', emoji: '🛡️', description: 'Score 80% or higher on any module', unlocked: false },
  { id: 'fire_expert', name: 'Fire Safety Expert', emoji: '🔥', description: 'Master fire safety module', unlocked: false },
  { id: 'flood_guardian', name: 'Flood Guardian', emoji: '🌊', description: 'Complete flood preparedness training', unlocked: false },
  { id: 'earthquake_survivor', name: 'Earthquake Survivor', emoji: '🌋', description: 'Excel in earthquake response', unlocked: false },
  { id: 'lightning_fast', name: 'Lightning Fast', emoji: '⚡', description: 'Complete 3 modules in one session', unlocked: false },
];

const initialProgress: UserProgress = {
  score: 68,
  level: 1,
  streak: 3,
  badges: initialBadges,
  completedModules: []
};

export const useGameState = () => {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('safecampus_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress({ ...initialProgress, ...parsed });
      } catch (error) {
        console.error('Failed to parse saved progress:', error);
      }
    }
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    localStorage.setItem('safecampus_progress', JSON.stringify(progress));
  }, [progress]);

  const addPoints = (points: number) => {
    setProgress(prev => ({
      ...prev,
      score: Math.min(100, prev.score + points)
    }));
  };

  const unlockBadge = (badgeId: string) => {
    setProgress(prev => ({
      ...prev,
      badges: prev.badges.map(badge =>
        badge.id === badgeId && !badge.unlocked
          ? { ...badge, unlocked: true, unlockedAt: new Date() }
          : badge
      )
    }));
  };

  const completeModule = (moduleId: string, score: number) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        completedModules: [...prev.completedModules, moduleId],
        score: Math.min(100, prev.score + score)
      };

      // Auto-unlock badges based on achievements
      if (score >= 80 && !prev.badges.find(b => b.id === 'campus_hero')?.unlocked) {
        newProgress.badges = newProgress.badges.map(badge =>
          badge.id === 'campus_hero'
            ? { ...badge, unlocked: true, unlockedAt: new Date() }
            : badge
        );
      }

      if (moduleId === 'fire' && !prev.badges.find(b => b.id === 'fire_expert')?.unlocked) {
        newProgress.badges = newProgress.badges.map(badge =>
          badge.id === 'fire_expert'
            ? { ...badge, unlocked: true, unlockedAt: new Date() }
            : badge
        );
      }

      if (moduleId === 'flood' && !prev.badges.find(b => b.id === 'flood_guardian')?.unlocked) {
        newProgress.badges = newProgress.badges.map(badge =>
          badge.id === 'flood_guardian'
            ? { ...badge, unlocked: true, unlockedAt: new Date() }
            : badge
        );
      }

      if (moduleId === 'earthquake' && !prev.badges.find(b => b.id === 'earthquake_survivor')?.unlocked) {
        newProgress.badges = newProgress.badges.map(badge =>
          badge.id === 'earthquake_survivor'
            ? { ...badge, unlocked: true, unlockedAt: new Date() }
            : badge
        );
      }

      return newProgress;
    });
  };

  const resetProgress = () => {
    setProgress(initialProgress);
    localStorage.removeItem('safecampus_progress');
  };

  return {
    progress,
    addPoints,
    unlockBadge,
    completeModule,
    resetProgress
  };
};