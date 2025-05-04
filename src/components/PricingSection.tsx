
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Validate your startup idea",
    features: [
      "Idea validation engine",
      "Basic workflow preview",
      "Limited Co-Founder AI chat",
      "Community access (read-only)"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Everything you need to grow",
    features: [
      "Full access to dashboard",
      "Complete workflow visualizer",
      "Unlimited Co-Founder AI chat",
      "Community participation",
      "Basic social media suggestions"
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Startup",
    price: "$29.99",
    period: "/month",
    description: "Scale your business efficiently",
    features: [
      "Everything in Pro",
      "Social media manager",
      "Investor connect",
      "Priority support",
      "Advanced analytics",
      "Team collaboration (3 seats)"
    ],
    cta: "Start Startup Trial",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Simple Pricing</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the perfect plan for your startup journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card flex flex-col justify-between relative ${
                plan.popular 
                  ? "border-2 border-ideify-purple shadow-lg md:scale-105 z-10" 
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ideify-purple text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className={plan.popular 
                  ? "bg-gradient-to-r from-ideify-purple to-ideify-blue text-white hover:opacity-90" 
                  : "bg-white/50 hover:bg-white/80 text-gray-800"
                }
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass inline-block px-8 py-4 rounded-xl max-w-2xl mx-auto">
          <p className="text-lg font-medium mb-2">Enterprise Custom Plan</p>
          <p className="text-gray-700">
            Custom solutions for accelerators, incubators, and large organizations.
            Contact us for tailored pricing and features.
          </p>
          <Button variant="link" className="text-ideify-purple mt-2">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
