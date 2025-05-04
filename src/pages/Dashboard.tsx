
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, BarChart3, Lightbulb, Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 gradient-text">Welcome Back</h1>
        <p className="text-muted-foreground text-lg">Your startup journey continues today</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Idea Score", value: "74/100", icon: <Lightbulb className="h-5 w-5 text-amber-500" />, change: "+12%" },
          { title: "Milestones", value: "4/10", icon: <Calendar className="h-5 w-5 text-emerald-500" />, change: "2 upcoming" },
          { title: "Mentor Feedback", value: "3", icon: <BarChart3 className="h-5 w-5 text-blue-500" />, change: "1 new" },
          { title: "Market Fit", value: "68%", icon: <BarChart3 className="h-5 w-5 text-purple-500" />, change: "+5%" }
        ].map((stat, index) => (
          <Card key={index} className="glass backdrop-blur-md hover:bg-white/40 transition-all duration-300 border border-white/20">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <div className="p-2 bg-white/20 rounded-md backdrop-blur-md">
                  {stat.icon}
                </div>
                <Badge variant="outline" className="bg-white/30 text-xs font-medium">
                  {stat.change}
                </Badge>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mt-3">{stat.title}</h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Startup Progress Card */}
        <Card className="glass backdrop-blur-md hover:shadow-lg transition-all duration-300 border border-white/40">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Startup Progress</CardTitle>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ideify-purple to-ideify-blue flex items-center justify-center text-white text-sm">
                45%
              </div>
            </div>
            <CardDescription>Tracking your key milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-medium">Current phase: Validation</span>
                  <span>45%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-gradient-to-r from-white/10 to-white/5">
                  <div className="h-full bg-gradient-to-r from-ideify-purple to-ideify-blue rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { title: "Business Model", done: true },
                  { title: "Market Research", done: true },
                  { title: "Prototype", done: false },
                  { title: "Pitch Deck", done: false }
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                      step.done ? "bg-ideify-purple text-white" : "bg-white/20"
                    }`}>
                      {step.done && <ChevronRight className="h-3 w-3" />}
                    </div>
                    <span className={`text-sm ${step.done ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all">
              View Detailed Roadmap
            </Button>
          </CardFooter>
        </Card>
        
        {/* Latest Insights Card */}
        <Card className="glass backdrop-blur-md hover:shadow-lg transition-all duration-300 border border-white/40">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Latest Insights</CardTitle>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ideify-blue to-sky-400 flex items-center justify-center text-white text-sm">
                3
              </div>
            </div>
            <CardDescription>AI-generated recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                { text: "Consider expanding your target market to include small businesses", priority: "High" },
                { text: "Your current business model needs refinement in the revenue streams", priority: "Medium" },
                { text: "Connect with 3 more potential investors from your network", priority: "Medium" }
              ].map((insight, i) => (
                <li key={i} className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium flex-1">{insight.text}</span>
                    <Badge className={`${
                      insight.priority === "High" 
                        ? "bg-red-400/20 text-red-400 hover:bg-red-400/30" 
                        : "bg-amber-400/20 text-amber-400 hover:bg-amber-400/30"
                    } ml-2 shrink-0`}>
                      {insight.priority}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all">
              Get More Insights
            </Button>
          </CardFooter>
        </Card>
        
        {/* Upcoming Tasks Card */}
        <Card className="glass backdrop-blur-md hover:shadow-lg transition-all duration-300 border border-white/40">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Tasks</CardTitle>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white text-sm">
                3
              </div>
            </div>
            <CardDescription>Your priority actions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                { text: "Complete business profile", date: "Today", type: "Setup" },
                { text: "Review feedback from mentors", date: "Tomorrow", type: "Review" },
                { text: "Prepare pitch deck draft", date: "May 10", type: "Pitch" }
              ].map((task, i) => (
                <li key={i} className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{task.text}</span>
                    <Badge variant="outline" className="bg-white/10 text-xs">
                      {task.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Due: {task.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all">
              View All Tasks
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
