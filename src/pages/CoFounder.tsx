
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

const CoFounder = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", content: "Hello! I'm your AI Co-Founder. How can I help with your startup today?" },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        { 
          role: "assistant", 
          content: "I'm analyzing your request. As your AI co-founder, I'd suggest focusing on validating your idea with potential customers before proceeding further. Would you like me to help create a validation strategy?"
        }
      ]);
    }, 1000);
    
    setMessage("");
  };

  return (
    <div className="container mx-auto p-6 h-[calc(100vh-2rem)]">
      <div className="flex flex-col h-full">
        <h1 className="text-3xl font-bold mb-6">Co-Founder</h1>
        
        <Card className="flex-1 glass overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle>Chat with your AI Co-Founder</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto pb-4">
            <div className="space-y-4">
              {chatHistory.map((chat, index) => (
                <div 
                  key={index}
                  className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      chat.role === "user" 
                        ? "bg-ideify-purple/40 text-white" 
                        : "bg-white/20 backdrop-blur-sm"
                    }`}
                  >
                    {chat.content}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask your AI Co-Founder..."
                className="bg-white/10"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>
                <SendIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CoFounder;
