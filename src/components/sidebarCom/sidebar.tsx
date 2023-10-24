"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Playlist } from "./data/playlist"
import { usePathname } from "next/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { useState } from "react"
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}


export function Sidebar({ className }: SidebarProps) {

  function getFirstStringBetweenSlashes(inputString: string): string | null {
    const match = inputString.match(/\/([^/]+)\//);
    if (match && match[1]) {
      return match[1];
    }
    return null; // Return null if no match is found
  }


  const pathname = usePathname()

  const renderAdminSidebar = () => (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-2">
        <div className="px-3 py-2">

          <Link
            href="/admin/user-managment"
            className='text-sm transition-colors hover:text-primary'
          ><div className="flex items-center  ml-4 mt-4" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
              User Managment
            </div>
          </Link>


          <Link
            href="/admin/widgets-managment"
            className='text-sm transition-colors hover:text-primary'
          ><div className="flex items-center  ml-4 mt-4" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
              </svg>
              Widgets Managment
            </div>
          </Link>




          <div className="space-y-1">

            <Link
              href="/admin/publishers"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 h-6 w-6"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Publishers
              </div>
            </Link>


            <Link
              href="/admin/advertiser"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 h-6 w-6"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Advertisers
              </div>
            </Link>



            <Link
              href="/admin/users"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 h-6 w-6"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Users
              </div>
            </Link>


            <Link
              href="/admin/audit"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 h-6 w-6"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Audit
              </div>
            </Link>



          </div>

        </div>
      </div>
    </div>
  );

  

  const renderPublisherSidebar = (str: string) =>{ 
    

   


    return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">

          <Accordion type="single" collapsible defaultValue={str} className="w-full">


            <AccordionItem value="item-1" className="data-[state=closed]:border-none ">
              <AccordionTrigger>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-4 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <p className="text-sm ">Analysis</p>
                </div>
              </AccordionTrigger>

              <AccordionContent  >

                <Link
                  href="/publisher/analysis/authors"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4"> Authors</div>
                </Link>


                {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                    <div className="pl-10"> Authors</div>
                     
                    </Button> */}

                <Link
                  href="/publisher/analysis/content"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4"> Content</div>
                </Link>

                {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                    <div className="pl-10"> Content</div>
                      
                    </Button> */}
                <Link
                  href="/publisher/analysis/classifications"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4"> Classification</div>
                </Link>
                {/* <Button variant="ghost" className="w-full justify-start text-xs  ">
                  <div className="pl-10"> Classification</div>

                </Button> */}
                <Link
                  href="/publisher/analysis/widgets-performance"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4">Widgets Performence</div>
                </Link>

                {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                  <div className="pl-10">  Widgets Performence</div>

                </Button> */}
                <Link
                  href="/publisher/analysis/content-grouping"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4">Content Grouping</div>
                </Link>

                {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                  <div className="pl-10">  Content Grouping</div>

                </Button> */}
                <Link
                  href="/publisher/analysis/evergreen"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4">Evergreen Content</div>
                </Link>

                {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                  <div className="pl-10">  Evergreen Content</div>

                </Button> */}

                <Link
                  href="/publisher/analysis/digest-report"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4">Digest</div>
                </Link>

                {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                  <div className="pl-10"> Digest</div>

                </Button> */}

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="data-[state=closed]:border-none">
              <AccordionTrigger>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ml-4 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg> <p className=" text-sm ">

                    Targeting
                  </p>
                </div></AccordionTrigger>
              <AccordionContent>
                <div className="space-y-1">

                  <Link
                    href="/publisher/targeting/segmentation"
                    className='text-sm transition-colors hover:text-primary'
                  >
                    <div className="pl-9 m-4"> Segmentation</div>
                  </Link>


                  {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                    <div className="pl-10"> Segmentation</div>

                  </Button> */}

                  <Link
                    href="/publisher/targeting/content-grouping"
                    className='text-sm transition-colors hover:text-primary'
                  >
                    <div className="pl-9 m-4"> ContentGrouping</div>
                  </Link>

                  {/* <Button variant="ghost" className="w-full justify-start text-xs ">
                    <div className="pl-10"> ContentGrouping</div>

                  </Button> */}

                </div>
              </AccordionContent>
            </AccordionItem>


          </Accordion>

          <div className="space-y-1">



            <Link
              href="/publisher/article-boosting"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center ml-4 mt-2 " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                Article Boosting
              </div>
            </Link>



            <Link
              href="/publisher/email-news-letter"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                EmailNewsLetter
              </div>
            </Link>



            <Link
              href="/publisher/survey"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
                Survey
              </div>
            </Link>


            <Link
              href="/publisher/notification"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                Notification
              </div>
            </Link>


            <Link
              href="/publisher/digest-report"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Digest Report
              </div>
            </Link>



          </div>




          <div className="space-y-1">

            <Link
              href="/publisher/search"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                Search
              </div>
            </Link>


            {/* <Button variant="ghost" className="w-full justify-start"><div className="flex items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

              Search
            </div>
            </Button> */}
            <Link
              href="/publisher/ai-configs"
              className='text-sm transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                </svg>
                AI Configs
              </div>
            </Link>

            <Link
              href="/publisher/integration"
              className='text-sm  transition-colors hover:text-primary'
            ><div className="flex items-center  ml-4 mt-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                Integration
              </div>
            </Link>




            {/* <button onClick={() => {
              setOpenMenuItems(["item-1", "item-2"])
              console.log(openMenuItems);

            }}>open</button>
            <button onClick={() => {
              setOpenMenuItems([])
              console.log(openMenuItems);

            }}>close</button> */}
          </div>

        </div>
      </div>
    </div>
  )};



  const renderAdvertiserSidebar = (str: string) => (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">


          <Accordion type="single" collapsible defaultValue={str} className="w-full">
            <AccordionItem value="item-1" className="data-[state=closed]:border-none">
              <AccordionTrigger><div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ml-4 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>


                <p className=" text-sm ">
                  Media Planner
                </p>
              </div>
              </AccordionTrigger>
              <AccordionContent>

                <Link
                  href="/advertiser/media-planner/review-targeting"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4"> Review Targeting</div>
                </Link>


                <Link
                  href="/advertiser/media-planner/review-ad"
                  className='text-sm transition-colors hover:text-primary'
                >
                  <div className="pl-9 m-4">  Review Ads</div>
                </Link>






              </AccordionContent>
            </AccordionItem>
          </Accordion>







          <Link
            href="/advertiser/campaigns"
            className='text-sm transition-colors hover:text-primary'
          ><div className="flex items-center ml-4 mt-2 " >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              Campaigns
            </div>
          </Link>



          {/* 
            <Button variant="ghost" className="w-full justify-start"><div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>

              Campaigns
            </div>
            </Button> */}

          <Link
            href="/advertiser/ad-mapping"
            className='text-sm transition-colors hover:text-primary'
          ><div className="flex items-center ml-4 mt-4 " >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              Ad Mapping
            </div>
          </Link>







        </div>
      </div>
    </div>
  );


  let check: String;
  if (getFirstStringBetweenSlashes(pathname + '/')=== "publisher")
  
  { check = "/publisher" }
  else if(getFirstStringBetweenSlashes(pathname+ '/')==="advertiser")
  
  { check = "/advertiser" }
  else {
    check = "/admin"
  }

  switch (check) {
    case "/admin":
      return renderAdminSidebar();
    case "/publisher":
      if (pathname.includes("/publisher/analysis"))
      {return renderPublisherSidebar('item-1');}
      if(pathname.includes("/publisher/targeting"))
      return renderPublisherSidebar('item-2')
    return renderPublisherSidebar('')
    case "/advertiser":
      if (pathname.includes("/advertiser/media-planner"))
      return renderAdvertiserSidebar('item-1');
      return renderAdvertiserSidebar('');
    default:
      return null;
  }


}