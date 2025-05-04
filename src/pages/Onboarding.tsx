
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Rocket, Lightbulb } from "lucide-react";

type StartupStage = "zero" | "mid-level";

interface FormValues {
  startupStage: StartupStage;
}

const Onboarding = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    defaultValues: {
      startupStage: "zero",
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (values: FormValues) => {
    if (values.startupStage === "zero") {
      navigate("/idea-validation");
    } else {
      navigate("/startup-details");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex items-center justify-center py-12">
        <div className={`w-full max-w-2xl transition-all duration-1000 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass rounded-2xl p-8 shadow-xl backdrop-blur-md bg-white/30 border border-white/40">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                <span className="gradient-text">Tell Us About Your Startup</span>
              </h1>
              <p className="text-gray-700 max-w-lg mx-auto">
                We'll personalize your experience based on your current startup stage
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="startupStage"
                  render={({ field }) => (
                    <FormItem className="space-y-8">
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <FormItem className="relative">
                          <FormControl>
                            <RadioGroupItem
                              value="zero"
                              className="peer sr-only"
                              id="zero"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="zero"
                            className="glass cursor-pointer flex flex-col items-center p-6 rounded-xl peer-aria-checked:ring-2 peer-aria-checked:ring-ideify-purple hover:bg-white/40 transition-all duration-300 h-full"
                          >
                            <div className="mb-4 h-16 w-16 rounded-full bg-ideify-purple/20 flex items-center justify-center">
                              <Lightbulb className="h-8 w-8 text-ideify-purple" />
                            </div>
                            <div className="font-bold text-xl mb-2">Starting from Zero</div>
                            <p className="text-gray-700 text-center">I have an idea but haven't started building yet</p>
                          </FormLabel>
                        </FormItem>

                        <FormItem className="relative">
                          <FormControl>
                            <RadioGroupItem
                              value="mid-level"
                              className="peer sr-only"
                              id="mid-level"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="mid-level"
                            className="glass cursor-pointer flex flex-col items-center p-6 rounded-xl peer-aria-checked:ring-2 peer-aria-checked:ring-ideify-purple hover:bg-white/40 transition-all duration-300 h-full"
                          >
                            <div className="mb-4 h-16 w-16 rounded-full bg-ideify-purple/20 flex items-center justify-center">
                              <Rocket className="h-8 w-8 text-ideify-purple" />
                            </div>
                            <div className="font-bold text-xl mb-2">Mid-Level Startup</div>
                            <p className="text-gray-700 text-center">I already have a team, MVP, or product in the market</p>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormItem>
                  )}
                />

                <div className="flex justify-center">
                  <Button 
                    type="submit"
                    size="lg" 
                    className="bg-gradient-to-r from-ideify-purple to-ideify-blue hover:opacity-90 text-white"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
