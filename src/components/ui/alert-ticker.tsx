import React from 'react';

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
    <div className="glass-card p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-destructive">LIVE ALERTS</span>
      </div>
      
      <div className="relative h-8 overflow-hidden">
        <div className="animate-slide-in-right flex items-center gap-8 whitespace-nowrap">
          {alerts.concat(alerts).map((alert, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span className="text-lg">{alert.icon}</span>
              <span className="font-medium text-foreground">
                {alert.message} in {alert.region}
              </span>
              {index < alerts.length * 2 - 1 && (
                <span className="text-border mx-4">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};