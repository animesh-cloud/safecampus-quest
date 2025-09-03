import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FloatingIcons } from '@/components/ui/floating-icons';
import { ProgressRing } from '@/components/ui/progress-ring';
import { AlertTicker } from '@/components/ui/alert-ticker';
import { FeatureCard } from '@/components/ui/feature-card';
import { LeaderboardPreview } from '@/components/ui/leaderboard-preview';
import { BadgesShowcase } from '@/components/ui/badges-showcase';
import { SOSPreview } from '@/components/ui/sos-preview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingIcons />
        
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-cyberpunk opacity-10"></div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="text-gradient-cyberpunk">🌍 SafeCampus</span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Making Campuses <span className="text-gradient-energy">Disaster-Ready</span> 🚀
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Gamified learning, virtual drills, and emergency tools for schools & colleges.
            </p>
            
            <Button 
              size="lg" 
              className="text-xl px-8 py-4 gradient-cyberpunk hover:scale-105 transition-transform duration-300 glow-blue"
            >
              Try the Demo → 
            </Button>
          </div>
        </div>
      </section>

      {/* Preparedness Score Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient-cyberpunk">
              Your Preparedness Score
            </h2>
            <p className="text-muted-foreground text-lg">
              Track your disaster readiness in real-time
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <ProgressRing percentage={68} size={200} strokeWidth={12} />
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-primary mb-2">
              You're 68% Disaster Ready! 🚀
            </p>
            <p className="text-muted-foreground">
              Complete 2 more modules to reach 85% readiness
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-energy">
              How SafeCampus Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of disaster preparedness education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🎮"
              title="Gamified Modules"
              description="Learn safety with interactive quizzes, badges, and achievement systems that make learning fun."
              gradient="cyberpunk"
            />
            <FeatureCard
              icon="🏃‍♂️"
              title="Virtual Drills"
              description="Simulate real emergencies with AR/VR experiences for earthquakes, floods, and fires."
              gradient="energy"
            />
            <FeatureCard
              icon="🚨"
              title="Emergency Tools"
              description="One-tap SOS button with real-time alerts and emergency contact integration."
              gradient="danger"
            />
            <FeatureCard
              icon="📊"
              title="Admin Dashboard"
              description="Track preparedness scores across campus with detailed analytics and reporting."
              gradient="nature"
            />
          </div>
        </div>
      </section>

      {/* Alert Ticker Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <AlertTicker />
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-cyberpunk">
              Level Up Your Safety Skills
            </h2>
            <p className="text-muted-foreground text-lg">
              Compete with peers and earn prestigious safety badges
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <LeaderboardPreview />
            <BadgesShowcase />
          </div>
        </div>
      </section>

      {/* Emergency Preview Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-danger">
              Emergency Response Hub
            </h2>
            <p className="text-muted-foreground text-lg">
              Instant access to help when every second counts
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <SOSPreview />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-energy">
              Real Impact Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              How SafeCampus is making a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SafeCampus training helped our students respond perfectly during the Assam floods. Everyone knew exactly what to do.",
                author: "Dr. Priya Sharma",
                role: "Principal, Assam University",
                avatar: "👩‍🏫"
              },
              {
                quote: "The gamified approach made disaster prep actually fun. My preparedness score went from 30% to 95% in just 2 weeks!",
                author: "Rahul Kumar",
                role: "Student, Delhi College",
                avatar: "👨‍🎓"
              },
              {
                quote: "The emergency SOS feature connected us directly with NDMA during the Gujarat earthquake drill. Incredible response time.",
                author: "Prof. Amit Patel",
                role: "Safety Officer, IIT Gujarat",
                avatar: "👨‍🔬"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4 text-gradient-cyberpunk">
            Safer Schools = Safer Futures
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions already using SafeCampus to protect their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 gradient-cyberpunk glow-blue hover:scale-105 transition-transform duration-300"
            >
              Get Started (Schools) 🏫
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary/10"
            >
              Contact Us 📞
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 text-gradient-cyberpunk">
            🌍 SafeCampus
          </div>
          <p className="text-muted-foreground mb-4">
            Making disaster preparedness accessible, engaging, and effective.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">API</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
