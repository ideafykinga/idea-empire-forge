
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Validate",
    description: "Input your startup idea and get AI-powered market validation and analysis.",
    color: "from-blue-400 to-purple-500"
  },
  {
    number: "02",
    title: "Visualize",
    description: "Convert your validated idea into a comprehensive startup roadmap and workflow.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Grow",
    description: "Leverage AI insights, community feedback, and investor connections to scale your startup.",
    color: "from-pink-500 to-red-500"
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 relative bg-gradient-to-b from-white/80 to-purple-50/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A simple three-step process to turn your idea into reality
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`relative mb-6 glass rounded-full h-20 w-20 flex items-center justify-center shadow-lg border-2 border-white bg-gradient-to-r ${step.color}`}>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex mt-8 justify-center">
                    <ArrowRight className="text-purple-300 h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
