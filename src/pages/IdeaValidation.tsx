
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const IdeaValidation = () => {
  const [idea, setIdea] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;
  const navigate = useNavigate();

  const handleIdeaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setIdea(value);
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim().length < 50) {
      toast.error("Please provide a more detailed description of your idea (at least 50 characters).");
      return;
    }

    setIsSubmitting(true);
    // This would normally send the idea to an AI service for analysis
    // For now we'll simulate the process
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/idea-feedback", { state: { idea } });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-2xl">
          <div className="glass rounded-2xl p-8 shadow-xl backdrop-blur-md bg-white/30 border border-white/40">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Describe Your Startup Idea</span>
              </h1>
              <p className="text-gray-700 max-w-lg mx-auto">
                We'll analyze your idea using AI and provide feedback to help you refine it.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Textarea
                  placeholder="Describe your startup idea in detail. What problem are you solving? Who is your target audience? What makes your solution unique?"
                  className="min-h-[200px] glass bg-white/20 text-gray-800 placeholder:text-gray-500 border-white/40 focus:border-ideify-purple"
                  value={idea}
                  onChange={handleIdeaChange}
                  required
                />
                <div className="text-right text-sm text-gray-600">
                  {charCount}/{maxChars} characters
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || idea.trim().length < 50}
                  className="bg-gradient-to-r from-ideify-purple to-ideify-blue hover:opacity-90 text-white"
                >
                  {isSubmitting ? (
                    "Analyzing your idea..."
                  ) : (
                    <>
                      Validate My Idea
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaValidation;
