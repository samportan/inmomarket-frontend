import { Home, Inbox, Settings, Search, Sun, Moon, Bell, Newspaper, Heart, User2, ChevronUp } from "lucide-react";
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
  SidebarFooter,
} from "./ui/sidebar";

import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const items = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Notificaciones",
    url: "#",
    icon: Bell,
  },
  {
    title: "Favoritos",
    url: "#",
    icon: Heart,
  },
  {
    title: "Mis avisos",
    url: "#",
    icon: Newspaper,
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
      <SidebarFooter className="py-4"> {/* Adjusted padding for more height */}
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center gap-2">
                  <Avatar className="w-8 h-8"> {/* Ensure avatar size fits */}
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar> 
                  <span>Username</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <>
                      <span>Dark Mode</span>
                      <Moon className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Light Mode</span>
                      <Sun className="w-4 h-4" />
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
