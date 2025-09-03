import React from 'react';
import { Card, CardContent } from './card';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: 'cyberpunk' | 'energy' | 'nature' | 'danger';
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient,
  className = "",
}) => {
  return (
    <Card className={`hover-lift cursor-pointer group glass-card ${className}`}>
      <CardContent className="p-6">
        <div className={`w-16 h-16 rounded-2xl gradient-${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl">{icon}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient-cyberpunk">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 flex items-center text-primary text-sm font-medium">
          Learn more
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </CardContent>
    </Card>
  );
};