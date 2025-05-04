
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WorkflowVisualization = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate loading and then animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      const animationTimer = setTimeout(() => {
        setIsAnimated(true);
      }, 500);
      
      return () => clearTimeout(animationTimer);
    }, 2000);
    
    return () => clearTimeout(loadingTimer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-5xl">
          <div className="glass rounded-2xl p-8 shadow-xl backdrop-blur-md bg-white/30 border border-white/40">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Your Startup Roadmap</span>
              </h1>
              <p className="text-gray-700 max-w-lg mx-auto">
                Here's your personalized workflow to turn your idea into reality
              </p>
            </div>

            {isLoading ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 border-4 border-t-ideify-purple border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-700">Generating your startup roadmap...</p>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="relative">
                  {/* Connection line */}
                  <div className="absolute h-full w-0.5 bg-gradient-to-b from-ideify-purple to-ideify-blue top-0 left-6 z-0"></div>
                  
                  {/* Workflow steps */}
                  <div className="space-y-12 relative z-10">
                    {/* Step 1 */}
                    <div className={`transition-all duration-1000 delay-100 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="flex">
                        <div className="h-12 w-12 rounded-full bg-ideify-purple text-white flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">1</div>
                        <div className="glass ml-6 p-6 rounded-xl flex-grow">
                          <h3 className="font-bold text-xl mb-2">Market Research & Validation</h3>
                          <p className="text-gray-700 mb-4">
                            Conduct thorough market research and validate your idea with potential customers
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-ideify-purple">2-4 weeks</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">High Priority</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className={`transition-all duration-1000 delay-300 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="flex">
                        <div className="h-12 w-12 rounded-full bg-ideify-purple text-white flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">2</div>
                        <div className="glass ml-6 p-6 rounded-xl flex-grow">
                          <h3 className="font-bold text-xl mb-2">MVP Development</h3>
                          <p className="text-gray-700 mb-4">
                            Build a minimum viable product focusing on core functionality
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-ideify-purple">4-12 weeks</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">High Priority</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className={`transition-all duration-1000 delay-500 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="flex">
                        <div className="h-12 w-12 rounded-full bg-ideify-purple text-white flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">3</div>
                        <div className="glass ml-6 p-6 rounded-xl flex-grow">
                          <h3 className="font-bold text-xl mb-2">User Testing & Iteration</h3>
                          <p className="text-gray-700 mb-4">
                            Get feedback from early users and iterate on your product
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-ideify-purple">4-8 weeks</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">Medium Priority</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 4 */}
                    <div className={`transition-all duration-1000 delay-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="flex">
                        <div className="h-12 w-12 rounded-full bg-ideify-purple text-white flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">4</div>
                        <div className="glass ml-6 p-6 rounded-xl flex-grow">
                          <h3 className="font-bold text-xl mb-2">Go-to-Market Strategy</h3>
                          <p className="text-gray-700 mb-4">
                            Develop and execute a comprehensive go-to-market plan
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-ideify-purple">2-4 weeks</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">Medium Priority</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 5 */}
                    <div className={`transition-all duration-1000 delay-900 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                      <div className="flex">
                        <div className="h-12 w-12 rounded-full bg-ideify-purple text-white flex items-center justify-center text-xl font-bold flex-shrink-0 z-10">5</div>
                        <div className="glass ml-6 p-6 rounded-xl flex-grow">
                          <h3 className="font-bold text-xl mb-2">Launch & Growth</h3>
                          <p className="text-gray-700 mb-4">
                            Official launch and implementation of growth strategies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-ideify-purple">Ongoing</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">High Priority</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`flex justify-center pt-6 transition-all duration-1000 delay-1000 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <Button 
                    onClick={() => navigate("/dashboard")}
                    size="lg" 
                    className="bg-gradient-to-r from-ideify-purple to-ideify-blue hover:opacity-90 text-white"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowVisualization;
