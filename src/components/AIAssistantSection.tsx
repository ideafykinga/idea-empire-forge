
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const messages = [
  "How can I help with your startup idea?",
  "Let's validate your market strategy",
  "Need help creating a growth roadmap?",
  "I can suggest investor connections",
  "Let me help you optimize your workflow"
];

const AIAssistantSection = () => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      
      setTimeout(() => {
        const nextIndex = (messageIndex + 1) % messages.length;
        setMessageIndex(nextIndex);
        setCurrentMessage(messages[nextIndex]);
        setIsTyping(false);
      }, 500);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Your AI Co-Founder
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              A Gemini-powered conversational assistant that provides strategic advice,
              automates workflows, and helps you navigate the challenges of building a
              successful startup.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-ideify-purple/10 rounded-full p-2 mr-4">
                  <svg className="h-5 w-5 text-ideify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Strategic Advising</h4>
                  <p className="text-gray-700">Get AI-powered business insights tailored to your startup</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-ideify-purple/10 rounded-full p-2 mr-4">
                  <svg className="h-5 w-5 text-ideify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Workflow Automation</h4>
                  <p className="text-gray-700">Streamline your operations with AI-optimized processes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-ideify-purple/10 rounded-full p-2 mr-4">
                  <svg className="h-5 w-5 text-ideify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Motivational Coaching</h4>
                  <p className="text-gray-700">Stay motivated with personalized support and guidance</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-ideify-purple text-white hover:bg-ideify-deep-purple">
              Chat with Co-Founder AI
            </Button>
          </div>
          
          <div className="relative">
            <div className="glass rounded-2xl p-6 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-ideify-purple to-ideify-blue flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div>
                  <h4 className="font-bold">Co-Founder</h4>
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Online now</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white/40 rounded-lg p-4 max-w-[80%]">
                  <p className="text-gray-800">Hi there! I'm your AI Co-Founder. How can I help you build your startup today?</p>
                </div>
                
                <div className="bg-ideify-purple/10 rounded-lg p-4 max-w-[80%] ml-auto">
                  <p className="text-gray-800">I have an idea for a sustainability marketplace. Can you help me validate it?</p>
                </div>
                
                <div className="bg-white/40 rounded-lg p-4 max-w-[80%]">
                  <p className="text-gray-800">
                    Absolutely! I'll analyze market trends, competition and consumer behavior in the sustainability space.
                    First, could you tell me more about your specific marketplace concept?
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-ideify-purple to-ideify-blue flex items-center justify-center mr-3 shrink-0 mt-1">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                  <div className="bg-white/40 rounded-lg p-4 flex-1">
                    <p className="text-gray-800">
                      {isTyping ? "..." : currentMessage}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/50 rounded-full px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="bg-transparent flex-1 border-none focus:outline-none text-gray-800"
                />
                <Button size="sm" className="rounded-full h-8 w-8 p-0 flex items-center justify-center bg-ideify-purple">
                  <MessageCircle className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Market validation complete</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-ideify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs font-medium">Powered by Gemini AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
