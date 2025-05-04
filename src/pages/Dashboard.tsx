
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your startup journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Startup Progress</CardTitle>
            <CardDescription>Track your key milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-ideify-purple rounded-full" style={{ width: "45%" }}></div>
              </div>
              <p className="text-sm">Your startup is 45% ready for launch</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Details</Button>
          </CardFooter>
        </Card>
        
        <Card className="glass">
          <CardHeader>
            <CardTitle>Latest Insights</CardTitle>
            <CardDescription>AI-generated recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm">• Consider expanding your target market</li>
              <li className="text-sm">• Your business model needs refinement</li>
              <li className="text-sm">• Connect with 3 more potential investors</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Get More Insights</Button>
          </CardFooter>
        </Card>
        
        <Card className="glass">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your priority actions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm">• Complete business profile</li>
              <li className="text-sm">• Review feedback from mentors</li>
              <li className="text-sm">• Prepare pitch deck draft</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Tasks</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
