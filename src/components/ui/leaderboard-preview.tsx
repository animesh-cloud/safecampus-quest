import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';

interface LeaderboardUser {
  rank: number;
  name: string;
  score: number;
  avatar: string;
  badge: string;
}

const topUsers: LeaderboardUser[] = [
  { rank: 1, name: 'Alex Chen', score: 2485, avatar: '👨‍🎓', badge: '🏆' },
  { rank: 2, name: 'Maya Patel', score: 2341, avatar: '👩‍🎓', badge: '🥈' },
  { rank: 3, name: 'Sam Wilson', score: 2198, avatar: '👨‍💻', badge: '🥉' },
  { rank: 4, name: 'Lisa Zhang', score: 2067, avatar: '👩‍🔬', badge: '🛡️' },
  { rank: 5, name: 'James Roy', score: 1943, avatar: '👨‍🏫', badge: '⚡' },
];

export const LeaderboardPreview: React.FC = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-gradient-cyberpunk flex items-center gap-2">
          🏆 Top 5 Ready Students
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topUsers.map((user) => (
          <div
            key={user.rank}
            className="flex items-center gap-4 p-3 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary w-6">
                {user.rank}
              </span>
              <span className="text-2xl">{user.avatar}</span>
              <div>
                <div className="font-semibold text-foreground">{user.name}</div>
                <div className="text-sm text-muted-foreground">
                  {user.score} points
                </div>
              </div>
            </div>
            
            <div className="ml-auto">
              <Badge variant="secondary" className="bg-secondary/20">
                {user.badge}
              </Badge>
            </div>
          </div>
        ))}
        
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