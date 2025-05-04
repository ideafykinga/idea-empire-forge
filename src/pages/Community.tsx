
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Community = () => {
  const communityMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder, TechBloom",
      avatar: "SJ",
      description: "AI and machine learning startup focused on sustainable agriculture"
    },
    {
      name: "Michael Chen",
      role: "Co-founder, FinTrack",
      avatar: "MC",
      description: "Personal finance platform for millennials"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, EduSync",
      avatar: "ER",
      description: "Educational technology for personalized learning experiences"
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Connect with Fellow Founders</CardTitle>
            <CardDescription>
              Learn, share experiences, and grow together with other entrepreneurs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {communityMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="h-12 w-12 rounded-full bg-ideify-purple/60 flex items-center justify-center text-white font-medium">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs mt-1">{member.description}</p>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button className="w-full">Explore More Community Members</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Virtual and in-person events to grow your network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Startup Pitch Practice</h3>
                    <p className="text-sm text-muted-foreground">May 15, 2025 • 2:00 PM</p>
                    <p className="text-sm mt-2">Practice your pitch and get feedback from experienced founders and investors.</p>
                  </div>
                  <Button size="sm" variant="outline">RSVP</Button>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Founder Networking Mixer</h3>
                    <p className="text-sm text-muted-foreground">May 22, 2025 • 6:00 PM</p>
                    <p className="text-sm mt-2">Connect with other founders in a casual setting and exchange ideas.</p>
                  </div>
                  <Button size="sm" variant="outline">RSVP</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;
