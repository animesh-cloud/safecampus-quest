import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { useGameState } from '@/hooks/useGameState';

interface LeaderboardUser {
  rank: number;
  name: string;
  score: number;
  avatar: string;
  badge: string;
}

export const LeaderboardPreview: React.FC = () => {
  const { progress } = useGameState();
  const [users, setUsers] = useState<LeaderboardUser[]>([
    { rank: 1, name: 'Alex Chen', score: 2485, avatar: '👨‍🎓', badge: '🏆' },
    { rank: 2, name: 'Maya Patel', score: 2341, avatar: '👩‍🎓', badge: '🥈' },
    { rank: 3, name: 'Sam Wilson', score: 2198, avatar: '👨‍💻', badge: '🥉' },
    { rank: 4, name: 'Lisa Zhang', score: 2067, avatar: '👩‍🔬', badge: '🛡️' },
    { rank: 5, name: 'James Roy', score: 1943, avatar: '👨‍🏫', badge: '⚡' },
  ]);

  // Calculate user's position in leaderboard based on their score
  const userScore = (progress.score / 100) * 2500; // Convert percentage to points
  const currentUser = { rank: 0, name: 'You', score: userScore, avatar: '👤', badge: '🚀' };

  useEffect(() => {
    // Insert user into leaderboard and re-rank
    const allUsers = [...users, currentUser].sort((a, b) => b.score - a.score);
    const rankedUsers = allUsers.map((user, index) => ({ ...user, rank: index + 1 }));
    setUsers(rankedUsers.slice(0, 5)); // Keep top 5
  }, [progress.score]);

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-gradient-cyberpunk flex items-center gap-2">
          🏆 Top 5 Ready Students
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {users.map((user, index) => {
          const isCurrentUser = user.name === 'You';
          return (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                isCurrentUser 
                  ? 'bg-primary/20 border border-primary/30 glow-blue' 
                  : 'bg-muted/20 hover:bg-muted/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <motion.span 
                  className="text-2xl font-bold text-primary w-6"
                  animate={isCurrentUser ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isCurrentUser ? Infinity : 0, repeatDelay: 2 }}
                >
                  {user.rank}
                </motion.span>
                <span className="text-2xl">{user.avatar}</span>
                <div>
                  <div className={`font-semibold ${isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                    {user.name} {isCurrentUser && '(You)'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {Math.round(user.score)} points
                  </div>
                </div>
              </div>
              
              <div className="ml-auto">
                <Badge variant="secondary" className="bg-secondary/20">
                  {user.badge}
                </Badge>
              </div>
            </motion.div>
          );
        })}
        
        <div className="pt-4 border-t border-border/20">
          <div className="text-center">
            <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
              View Full Leaderboard →
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};