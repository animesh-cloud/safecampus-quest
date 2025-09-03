import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { Card, CardContent } from './card';
import { useToast } from '@/hooks/use-toast';

const emergencyContacts = [
  { name: 'NDMA Helpline', number: '1078', icon: '🚨', urgent: true },
  { name: 'Fire Department', number: '101', icon: '🔥', urgent: false },
  { name: 'Police', number: '100', icon: '👮‍♂️', urgent: false },
  { name: 'Ambulance', number: '108', icon: '🏥', urgent: false },
];

export const SOSPreview: React.FC = () => {
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);
  const { toast } = useToast();

  const handleSOSClick = () => {
    setShowEmergencyDialog(true);
    
    // Copy number to clipboard for demo
    navigator.clipboard.writeText('1078').then(() => {
      toast({
        title: "📞 Emergency Number Copied",
        description: "NDMA Helpline: 1078 copied to clipboard",
      });
    });
    
    // Auto close dialog after 3 seconds
    setTimeout(() => {
      setShowEmergencyDialog(false);
    }, 3000);
  };

  const handleContactClick = (contact: typeof emergencyContacts[0]) => {
    navigator.clipboard.writeText(contact.number);
    toast({
      title: `📞 ${contact.name}`,
      description: `Number ${contact.number} copied to clipboard`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Main SOS Button */}
      <div className="text-center relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            onClick={handleSOSClick}
            className="w-48 h-48 rounded-full text-2xl font-bold gradient-danger pulse-glow hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-red-500/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="text-center relative z-10">
              <motion.div 
                className="text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                🆘
              </motion.div>
              <div>EMERGENCY</div>
              <div className="text-lg">Call NDMA</div>
              <div className="text-sm opacity-80">1078</div>
            </div>
          </Button>
        </motion.div>
        
        {/* Emergency Dialog */}
        <AnimatePresence>
          {showEmergencyDialog && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4 z-20"
            >
              <div className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-2xl">
                <div className="text-center">
                  <div className="text-xl font-bold">📞 Calling NDMA...</div>
                  <div className="text-sm opacity-90">1078</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Quick Contact Cards */}
      <div className="grid grid-cols-2 gap-4">
        {emergencyContacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card 
              className={`glass-card hover-lift cursor-pointer ${
                contact.urgent ? 'glow-pink' : 'hover:glow-blue'
              }`}
              onClick={() => handleContactClick(contact)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{contact.icon}</div>
                <div className="font-semibold text-sm mb-1">{contact.name}</div>
                <div className="text-primary font-bold">{contact.number}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center text-xs text-muted-foreground">
        ⚠️ For demonstration purposes only
      </div>
    </div>
  );
};