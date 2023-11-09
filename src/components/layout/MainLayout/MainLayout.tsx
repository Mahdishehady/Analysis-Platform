"use client"

import { Metadata } from "next"
import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ReactNode } from "react"
import TeamSwitcher from "@/components/HeaderComponents/team-switcher"
import { MainNav } from "@/components/HeaderComponents/main-nav"
import { Search } from "@/components/sidebarCom/search"
import { UserNav } from "@/components/sidebarCom/user.nav"
import { Sidebar } from "@/components/sidebarCom/sidebar"
import { playlists } from "../../sidebarCom/data/playlist"

import { log } from "console"

interface MyComponentProps {
  children: ReactNode;
}


export const metadata: Metadata = {
  title: "Analytics App",
  description: "Website that shows the analytics.",
}

export default function MainLayout({ children }: MyComponentProps) {




  return (
    <>

      <div className="hidden md:block ">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-6">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-5 lg:border-l">
                <div className="h-[100vh]  px-4 py-2 lg:px-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}