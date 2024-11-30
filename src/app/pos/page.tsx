"use client";


import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import POSBody from "@/components/pos/components/POSBody";
import { AppSidebar } from "@/components/app-sidebar";


export default function Page() {


  return (
    <SidebarProvider>
          <AppSidebar/>

      <SidebarInset>
        <POSBody/>
      </SidebarInset>
    </SidebarProvider>
  );
}
