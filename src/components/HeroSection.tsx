
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 overflow-hidden">
      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Ideify</span>
              <span className="block"> Your AI Startup Co-Founder</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
              Empowering Startup Founders with AI-Driven Insights, Workflow Design, and Growth Strategies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-ideify-purple to-ideify-blue hover:opacity-90 text-white"
              asChild
            >
              <Link to="/signin">
                Start For Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="glass border-purple-200 hover:bg-white/50">
              See How It Works
            </Button>
          </div>
          
          <div className="pt-4 flex items-center justify-center lg:justify-start text-sm text-gray-600">
            <Rocket className="h-4 w-4 mr-2 text-ideify-purple" />
            <span>Trusted by 2,000+ founders across 50+ countries</span>
          </div>
        </div>
        
        {/* Hero Image/Mockup */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass p-4 md:p-6 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Ideify Dashboard Preview" 
              className="rounded-lg w-full h-auto shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-ideify-purple/20 flex items-center justify-center">
                  <span className="text-ideify-purple font-bold">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Co-Founder Assistant</p>
                  <p className="text-xs text-gray-600">Online now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
