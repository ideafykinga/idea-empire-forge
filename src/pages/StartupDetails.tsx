
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  startupName: z.string().min(2, {
    message: "Startup name must be at least 2 characters.",
  }),
  pitch: z.string().min(50, {
    message: "Pitch must be at least 50 characters.",
  }),
  targetMarket: z.string().min(10, {
    message: "Target market must be at least 10 characters.",
  }),
  stage: z.string(),
  challenges: z.string().min(20, {
    message: "Challenges must be at least 20 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const StartupDetails = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startupName: "",
      pitch: "",
      targetMarket: "",
      stage: "mvp",
      challenges: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    // This would normally send the data to the backend
    // For now we'll simulate the process
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Startup details saved successfully!");
      navigate("/workflow-visualization", { state: { startupData: data } });
    }, 1500);
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
                <span className="gradient-text">Tell Us About Your Startup</span>
              </h1>
              <p className="text-gray-700 max-w-lg mx-auto">
                Share details about your existing startup so we can help you plan and grow
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="startupName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Startup Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g. Ideify" 
                            className="glass bg-white/20 text-gray-800 border-white/40 focus:border-ideify-purple"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="stage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Stage</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass bg-white/20 text-gray-800 border-white/40 focus:border-ideify-purple">
                              <SelectValue placeholder="Select your current stage" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mvp">MVP (Minimum Viable Product)</SelectItem>
                            <SelectItem value="beta">Beta Testing</SelectItem>
                            <SelectItem value="launched">Launched Product</SelectItem>
                            <SelectItem value="scaling">Scaling / Growth</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="pitch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Elevator Pitch</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your startup in a concise elevator pitch"
                          className="glass bg-white/20 text-gray-800 border-white/40 focus:border-ideify-purple"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="targetMarket"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Market</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g. Small business owners, Tech startups, etc."
                          className="glass bg-white/20 text-gray-800 border-white/40 focus:border-ideify-purple"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Challenges</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What are the key challenges you're facing right now?"
                          className="glass bg-white/20 text-gray-800 border-white/40 focus:border-ideify-purple"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit"
                    size="lg" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-ideify-purple to-ideify-blue hover:opacity-90 text-white"
                  >
                    {isSubmitting ? (
                      "Saving your details..."
                    ) : (
                      <>
                        Continue to Workflow
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
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

export default StartupDetails;
