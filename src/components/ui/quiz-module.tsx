import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import JSConfetti from 'js-confetti';
import { useGameState } from '@/hooks/useGameState';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizModuleProps {
  moduleId: string;
  title: string;
  emoji: string;
  questions: Question[];
  onComplete?: (score: number) => void;
}

const jsConfetti = new JSConfetti();

export const QuizModule: React.FC<QuizModuleProps> = ({
  moduleId,
  title,
  emoji,
  questions,
  onComplete
}) => {
  const { addPoints, unlockBadge, completeModule } = useGameState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(Date.now());

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      jsConfetti.addConfetti({
        emojis: ['✅', '🎉', '🚀', '⭐'],
        emojiSize: 50,
        confettiNumber: 30,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const finalScore = Math.round((score / questions.length) * 100);
      const timeTaken = (Date.now() - startTime) / 1000;
      
      // Award points based on score
      const points = Math.round(finalScore / 10);
      addPoints(points);
      
      // Complete module
      completeModule(moduleId, points);
      
      // Check for quick responder badge (under 2 minutes)
      if (timeTaken < 120) {
        unlockBadge('quick_responder');
      }
      
      setIsComplete(true);
      onComplete?.(finalScore);
      
      // Big confetti for completion
      jsConfetti.addConfetti({
        emojis: ['🏆', '🎯', '💪', '🌟'],
        emojiSize: 60,
        confettiNumber: 50,
      });
    }
  };

  if (isComplete) {
    const finalScore = Math.round((score / questions.length) * 100);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto"
      >
        <Card className="glass-card text-center p-8">
          <CardContent>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-6xl mb-4"
            >
              🏆
            </motion.div>
            <h3 className="text-2xl font-bold mb-2 text-gradient-cyberpunk">
              Module Complete!
            </h3>
            <p className="text-muted-foreground mb-4">
              You scored {score}/{questions.length} ({finalScore}%)
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Badge className="bg-primary/20 text-primary mb-4">
                +{Math.round(finalScore / 10)} Points Earned! 🚀
              </Badge>
            </motion.div>
            <Button 
              onClick={() => window.location.reload()}
              className="gradient-cyberpunk glow-blue"
            >
              Try Another Module
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-gradient-cyberpunk">
            <span className="text-3xl">{emoji}</span>
            {title} - Question {currentQuestion + 1}/{questions.length}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.h3 
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold"
          >
            {question.question}
          </motion.h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => {
              let cardClass = "glass-card p-4 cursor-pointer transition-all duration-300 hover-lift";
              
              if (showResult) {
                if (index === question.correctAnswer) {
                  cardClass += " bg-green-500/20 border-green-500/50 glow-green";
                } else if (index === selectedAnswer && index !== question.correctAnswer) {
                  cardClass += " bg-red-500/20 border-red-500/50 animate-shake";
                } else {
                  cardClass += " opacity-50";
                }
              } else if (selectedAnswer === index) {
                cardClass += " bg-primary/20 border-primary/50";
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cardClass}
                  onClick={() => handleAnswerSelect(index)}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-muted/20 rounded-xl p-4"
              >
                <p className="text-sm text-muted-foreground">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <Button 
                onClick={handleNext}
                className="gradient-cyberpunk glow-blue px-8"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Module'} →
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};