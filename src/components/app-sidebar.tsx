'use client'
import * as React from "react"
import {
  Activity,
  LayoutDashboard,
  ListPlus,
  PhilippinePeso,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Point of Sales",
      url: "/pos",
      icon: PhilippinePeso,
      isActive: true,
     
    },
    {
      title: "Activities",
      url: "/activity",
      icon: Activity,
     
    },
    {
      title: "Miscellaneous",
      url: "/miscellaneous",
      icon: ListPlus,
     
    },
    {
      title: "Report",
      url: "/report",
      icon: LayoutDashboard,
    
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
     
    },
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher  />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
