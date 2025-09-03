import React from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';

const emergencyContacts = [
  { name: 'NDMA Helpline', number: '1078', icon: '🚨', urgent: true },
  { name: 'Fire Department', number: '101', icon: '🔥', urgent: false },
  { name: 'Police', number: '100', icon: '👮‍♂️', urgent: false },
  { name: 'Ambulance', number: '108', icon: '🏥', urgent: false },
];

export const SOSPreview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Main SOS Button */}
      <div className="text-center">
        <Button
          size="lg"
          className="w-48 h-48 rounded-full text-2xl font-bold gradient-danger pulse-glow hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🆘</div>
            <div>EMERGENCY</div>
            <div className="text-lg">Call NDMA</div>
            <div className="text-sm opacity-80">1078</div>
          </div>
        </Button>
      </div>
      
      {/* Quick Contact Cards */}
      <div className="grid grid-cols-2 gap-4">
        {emergencyContacts.map((contact, index) => (
          <Card 
            key={index}
            className={`glass-card hover-lift cursor-pointer ${
              contact.urgent ? 'glow-pink' : 'hover:glow-blue'
            }`}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{contact.icon}</div>
              <div className="font-semibold text-sm mb-1">{contact.name}</div>
              <div className="text-primary font-bold">{contact.number}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center text-xs text-muted-foreground">
        ⚠️ For demonstration purposes only
      </div>
    </div>
  );
};