
import { ReactNode } from "react";
import { Home, MessageSquare, Users, DollarSign } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/dashboard",
    description: "Overview of your startup journey"
  },
  {
    title: "Co-Founder",
    icon: MessageSquare,
    url: "/co-founder",
    description: "Chat with your AI assistant"
  },
  {
    title: "Community",
    icon: Users,
    url: "/community",
    description: "Connect with other founders"
  },
  {
    title: "Funds",
    icon: DollarSign,
    url: "/funds",
    description: "Explore investor connections"
  },
];

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="inset" className="border-none">
          <SidebarHeader>
            <div className="flex items-center px-2">
              <h2 className="text-xl font-bold text-ideify-purple">Ideify</h2>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={location.pathname === item.url}
                        asChild
                        tooltip={item.description}
                      >
                        <a href={item.url} className="w-full">
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-2 py-2">
              <div className="glass rounded-lg p-3 text-xs text-center">
                <p className="text-muted-foreground">Ideify © {new Date().getFullYear()}</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
