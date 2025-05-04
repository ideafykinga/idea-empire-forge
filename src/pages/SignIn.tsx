
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // This would normally connect to a real authentication service
    // For now we'll simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully signed in!");
      // Redirect to dashboard instead of onboarding
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="glass rounded-2xl p-8 shadow-xl backdrop-blur-md bg-white/30 border border-white/40">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Welcome to Ideify</span>
              </h1>
              <p className="text-gray-700">Sign in to continue your startup journey</p>
            </div>

            <Button 
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full py-6 glass hover:bg-white/40 transition-all duration-300 border border-white/40 flex items-center justify-center gap-3 text-gray-800"
            >
              <FcGoogle className="h-5 w-5" />
              <span>{isLoading ? "Signing in..." : "Continue with Google"}</span>
            </Button>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>By continuing, you agree to Ideify's</p>
              <p>
                <a href="#" className="text-ideify-purple hover:underline">Terms of Service</a> and{" "}
                <a href="#" className="text-ideify-purple hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
