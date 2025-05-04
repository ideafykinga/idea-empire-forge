
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IdeaFeedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const idea = location.state?.idea || "No idea provided";
  const [feedback, setFeedback] = useState<any>(null);

  useEffect(() => {
    // This would normally be an API call to analyze the idea
    // For now we'll simulate the process
    const timer = setTimeout(() => {
      setFeedback({
        score: 76,
        strengths: [
          "Addresses a clear market need",
          "Scalable business model",
          "Innovative approach",
        ],
        weaknesses: [
          "High competition in the space",
          "May require significant initial investment",
        ],
        suggestions: [
          "Consider focusing on a more specific niche initially",
          "Explore partnership opportunities to reduce go-to-market costs",
          "Develop a clear differentiation strategy from existing solutions",
        ],
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [idea]);

  const handleContinue = () => {
    navigate("/workflow-visualization", { state: { ideaFeedback: feedback } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-3xl">
          <div className="glass rounded-2xl p-8 shadow-xl backdrop-blur-md bg-white/30 border border-white/40">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Your Idea Analysis</span>
              </h1>
              <p className="text-gray-700 max-w-lg mx-auto">
                Here's what our AI thinks about your startup idea
              </p>
            </div>

            {isLoading ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 border-4 border-t-ideify-purple border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-700">Analyzing your idea...</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E9ECEF"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#7E69AB"
                        strokeWidth="3"
                        strokeDasharray={`${feedback.score}, 100`}
                      />
                      <text x="18" y="20.5" className="text-3xl" textAnchor="middle" fill="#333" fontWeight="bold">
                        {feedback.score}
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-4 text-ideify-purple">Strengths</h3>
                    <ul className="space-y-2">
                      {feedback.strengths.map((strength: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block h-5 w-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 flex items-center justify-center mr-2 mt-0.5">✓</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-4 text-ideify-purple">Areas to Improve</h3>
                    <ul className="space-y-2">
                      {feedback.weaknesses.map((weakness: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block h-5 w-5 rounded-full bg-red-100 text-red-600 flex-shrink-0 flex items-center justify-center mr-2 mt-0.5">!</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="glass p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-4 text-ideify-purple">Suggestions</h3>
                  <ul className="space-y-4">
                    {feedback.suggestions.map((suggestion: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">{index + 1}</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center pt-6">
                  <Button 
                    onClick={handleContinue}
                    size="lg" 
                    className="bg-gradient-to-r from-ideify-purple to-ideify-blue hover:opacity-90 text-white"
                  >
                    Continue to Workflow
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

export default IdeaFeedback;
