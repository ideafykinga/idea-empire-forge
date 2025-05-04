
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Funds = () => {
  const investors = [
    {
      name: "Horizon Ventures",
      focus: "Early stage technology startups",
      matchScore: 87,
      logo: "HV"
    },
    {
      name: "Blue Ocean Capital",
      focus: "SaaS and AI solutions",
      matchScore: 93,
      logo: "BOC"
    },
    {
      name: "Green Future Fund",
      focus: "Sustainable innovation and cleantech",
      matchScore: 76,
      logo: "GFF"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Funds</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Funding Goal</CardTitle>
            <CardDescription>
              Track your progress towards your seed round
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">$0</span>
                <span className="text-sm font-bold">$250,000</span>
              </div>
              <Progress value={15} className="h-2" />
              <div className="text-center text-sm">
                <span className="font-semibold">$37,500 raised</span> of $250,000 goal
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Update Goal</Button>
          </CardFooter>
        </Card>
        
        <Card className="glass">
          <CardHeader>
            <CardTitle>Pitch Deck Status</CardTitle>
            <CardDescription>
              Complete your pitch deck to attract investors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={60} className="h-2" />
              <p className="text-sm text-center">Your pitch deck is 60% complete</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  Problem statement
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  Solution overview
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-red-500 rounded-full mr-2"></div>
                  Market analysis
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Complete Pitch Deck</Button>
          </CardFooter>
        </Card>
        
        <Card className="glass">
          <CardHeader>
            <CardTitle>Funding Calendar</CardTitle>
            <CardDescription>
              Keep track of upcoming investor meetings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-2 bg-white/10 rounded-md">
                <p className="font-medium">Blue Ocean Capital</p>
                <p className="text-xs">May 18, 2025 • 10:30 AM</p>
              </div>
              <div className="p-2 bg-white/10 rounded-md">
                <p className="font-medium">Startup Pitch Competition</p>
                <p className="text-xs">May 23, 2025 • 2:00 PM</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Schedule Meeting</Button>
          </CardFooter>
        </Card>
      </div>
      
      <Card className="glass">
        <CardHeader>
          <CardTitle>Investor Matches</CardTitle>
          <CardDescription>
            Potential investors that match your startup profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {investors.map((investor, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-ideify-purple/60 flex items-center justify-center text-white font-medium">
                  {investor.logo}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{investor.name}</h3>
                    <div className="bg-ideify-purple/30 text-white px-2 py-1 rounded text-xs">
                      {investor.matchScore}% match
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{investor.focus}</p>
                </div>
                <Button size="sm">Connect</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Funds;
