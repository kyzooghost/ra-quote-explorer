import type { Metadata } from "next";
import localFont from "next/font/local";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
// import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full h-full flex flex-row">
            {/* <SidebarTrigger /> */}
            <div className="w-full">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
