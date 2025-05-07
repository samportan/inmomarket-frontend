import { Home, Inbox, Settings, Search, Sun, Moon, Bell, Newspaper, Heart } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Notifications",
    url: "/inbox",
    icon: Bell,
  },
  {
    title: "Favorites",
    url: "#",
    icon: Heart,
  },
  {
    title: "Mis avisos",
    url: "#",
    icon: Newspaper,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar className="flex flex-col h-full justify-between">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>InmoMarket</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Theme Toggle Button */}
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
          <span>Toggle Theme</span>
        </Button>
      </div>
    </Sidebar>
  );
}
