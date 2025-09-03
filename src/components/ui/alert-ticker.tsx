import React from 'react';
import { motion } from 'framer-motion';

interface Alert {
  icon: string;
  message: string;
  region: string;
}

const alerts: Alert[] = [
  { icon: '⚠️', message: 'Flood Warning', region: 'Assam' },
  { icon: '🔥', message: 'Heatwave Alert', region: 'Delhi' },
  { icon: '🌋', message: 'Earthquake Drill Scheduled', region: 'Gujarat' },
  { icon: '🌪️', message: 'Cyclone Watch', region: 'Odisha' },
];

export const AlertTicker: React.FC = () => {
  return (
    <motion.div 
      className="glass-card p-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <motion.div 
          className="w-3 h-3 bg-destructive rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-sm font-semibold text-destructive">LIVE ALERTS</span>
      </div>
      
      <div className="relative h-8 overflow-hidden">
        <motion.div 
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: [1000, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {alerts.concat(alerts).concat(alerts).map((alert, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <motion.span 
                className="text-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {alert.icon}
              </motion.span>
              <span className="font-medium text-foreground">
                {alert.message} in {alert.region}
              </span>
              {index < alerts.length * 3 - 1 && (
                <span className="text-border mx-4">|</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};