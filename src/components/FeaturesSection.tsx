
import { useState } from "react";
import { LightbulbIcon, Code, Users, Star, Database, Shield } from "lucide-react";

const features = [
  {
    icon: <LightbulbIcon className="h-6 w-6 text-ideify-purple" />,
    title: "Idea Validation Engine",
    description: "Analyze market demand, competition, and target audience with AI-powered insights to validate your startup idea."
  },
  {
    icon: <Code className="h-6 w-6 text-ideify-purple" />,
    title: "Workflow Visualizer",
    description: "Convert your idea into a comprehensive startup roadmap with interactive diagrams showing key milestones."
  },
  {
    icon: <Database className="h-6 w-6 text-ideify-purple" />,
    title: "Business Profile Builder",
    description: "Create a unified startup profile that powers all other modules with consistent company information."
  },
  {
    icon: <Star className="h-6 w-6 text-ideify-purple" />,
    title: "Smart Dashboard",
    description: "Access personalized insights, AI-generated to-do lists, KPIs and metrics to track your progress."
  },
  {
    icon: <Users className="h-6 w-6 text-ideify-purple" />,
    title: "Community Zone",
    description: "Join a supportive startup community where you can share progress, get feedback, and collaborate."
  },
  {
    icon: <Shield className="h-6 w-6 text-ideify-purple" />,
    title: "Investor Connect",
    description: "Find investors matched to your startup profile and get AI help with pitches and intros."
  },
];

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            All the tools you need to go from idea to successful startup, powered by AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="absolute inset-0 bg-gradient-card opacity-0 transition-opacity duration-300"
                style={{ opacity: hoveredIndex === index ? 0.15 : 0 }}
              />
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass inline-block px-6 py-3 rounded-xl text-center">
            <p className="text-gray-700 italic">
              "Let's turn ideas into empires, one founder at a time."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
