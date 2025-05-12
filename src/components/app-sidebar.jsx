import { Home, Bell, Newspaper, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "./ui/sidebar";


import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "Samuel Portan",
    email: "sportan@example.com",
    avatar: "https://github.com/shadcn.png", // Replace with a valid image path
  },
}

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

export function AppSidebar({props}) {

  return (
    <Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <img src="/images/inmomarket-logo-notext.png" alt="Logo" className="h-8 w-8" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">InmoMarket</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
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
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
