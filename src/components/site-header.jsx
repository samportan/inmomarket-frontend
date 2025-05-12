"use client"

import { SidebarIcon } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { useState } from "react"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // State to track login status

  return (
    <header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                InmoMarket
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Inicio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className="w-full sm:w-[300px] sm:mx-auto" />
        {!isLoggedIn && (
          <div className="flex gap-2 ml-auto">
            <Button
              variant="outline"
              onClick={() => console.log("Login clicked")}
            >
              Login
            </Button>
            <Button
              variant="primary"
              onClick={() => console.log("Register clicked")}
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
