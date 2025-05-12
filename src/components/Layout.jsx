import { SidebarProvider, SidebarTrigger, SidebarInset } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { SiteHeader } from "./site-header";
import { Outlet } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>
          <main className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
    </div>
  )
}