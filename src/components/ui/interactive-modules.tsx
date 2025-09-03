import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './card';
import { QuizModule } from './quiz-module';

const modules = [
  {
    id: 'earthquake',
    title: 'Earthquake Safety',
    emoji: '🌋',
    gradient: 'gradient-danger',
    questions: [
      {
        id: 'eq1',
        question: 'What is the first thing you should do during an earthquake?',
        options: ['Run outside immediately', 'Drop, Cover, and Hold On', 'Stand in a doorway', 'Call for help'],
        correctAnswer: 1,
        explanation: 'Drop to your hands and knees, take cover under a sturdy desk or table, and hold on until shaking stops.'
      },
      {
        id: 'eq2',
        question: 'Where is the safest place to be during an earthquake if you\'re indoors?',
        options: ['Under a strong table', 'In a doorway', 'Near a window', 'In the center of the room'],
        correctAnswer: 0,
        explanation: 'Under a sturdy table or desk provides the best protection from falling objects.'
      },
      {
        id: 'eq3',
        question: 'If you\'re outside during an earthquake, you should:',
        options: ['Run into the nearest building', 'Stay away from buildings and power lines', 'Lie down flat', 'Climb a tree'],
        correctAnswer: 1,
        explanation: 'Stay in open areas away from buildings, trees, and power lines that could fall.'
      }
    ]
  },
  {
    id: 'flood',
    title: 'Flood Preparedness',
    emoji: '🌊',
    gradient: 'gradient-cyberpunk',
    questions: [
      {
        id: 'fl1',
        question: 'How deep of water can sweep you away?',
        options: ['1 foot', '6 inches', '2 feet', '3 inches'],
        correctAnswer: 1,
        explanation: 'Just 6 inches of moving water can knock you down, and 12 inches can carry away a vehicle.'
      },
      {
        id: 'fl2',
        question: 'What should you do if you encounter a flooded road?',
        options: ['Drive through quickly', 'Turn around, don\'t drown', 'Test the depth first', 'Follow other cars'],
        correctAnswer: 1,
        explanation: 'Never attempt to drive through flooded roads. Turn around and find an alternative route.'
      },
      {
        id: 'fl3',
        question: 'When preparing for a flood, you should move to:',
        options: ['The basement', 'The highest floor', 'Outside', 'The garage'],
        correctAnswer: 1,
        explanation: 'Move to the highest floor of your building to stay above rising water levels.'
      }
    ]
  },
  {
    id: 'fire',
    title: 'Fire Safety',
    emoji: '🔥',
    gradient: 'gradient-energy',
    questions: [
      {
        id: 'fr1',
        question: 'What should you do if your clothes catch fire?',
        options: ['Run to find water', 'Stop, Drop, and Roll', 'Pat the flames down', 'Remove the clothing'],
        correctAnswer: 1,
        explanation: 'Stop, drop to the ground, and roll back and forth to smother the flames.'
      },
      {
        id: 'fr2',
        question: 'How should you evacuate a building during a fire?',
        options: ['Use the elevator', 'Crawl low under smoke', 'Run as fast as possible', 'Open all doors'],
        correctAnswer: 1,
        explanation: 'Crawl low under smoke where the air is cleaner, and never use elevators during a fire.'
      },
      {
        id: 'fr3',
        question: 'What is the first priority when discovering a fire?',
        options: ['Fight the fire', 'Alert others and evacuate', 'Call 911', 'Gather belongings'],
        correctAnswer: 1,
        explanation: 'Always alert others and evacuate first. Fighting fires should only be done by trained professionals.'
      }
    ]
  }
];

export const InteractiveModules: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const selectedModuleData = modules.find(m => m.id === selectedModule);

  if (selectedModule && selectedModuleData) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <motion.button
              onClick={() => setSelectedModule(null)}
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
              whileHover={{ x: -5 }}
            >
              ← Back to Modules
            </motion.button>
          </div>
          
          <QuizModule
            moduleId={selectedModuleData.id}
            title={selectedModuleData.title}
            emoji={selectedModuleData.emoji}
            questions={selectedModuleData.questions}
            onComplete={(score) => {
              console.log(`Module ${selectedModuleData.id} completed with score: ${score}%`);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gradient-energy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Interactive Learning Modules
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Click on any module to start your gamified disaster preparedness journey
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className="glass-card hover-lift cursor-pointer group"
                onClick={() => setSelectedModule(module.id)}
              >
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="text-6xl mb-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {module.emoji}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gradient-cyberpunk">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interactive quiz with 3 questions
                  </p>
                  <motion.div
                    className={`inline-block px-6 py-2 rounded-full text-white font-medium ${module.gradient} group-hover:glow-blue transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                  >
                    Start Module →
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};