"use client"
import { PodcastEmptyPlaceholder } from "@/components/HeaderComponents/podcast-empty-placeholder";
import MainLayout from "@/components/layout/MainLayout/MainLayout"
import TabChart from "@/components/tabCharts";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import React from "react";
import { TableDemo } from "./components/tableNotification";





export default function Notification() {


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
                <div className="flex items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <h2 className="text-lg  tracking-tight"> Notification</h2>
                </div>
            </div>
            <Tabs defaultValue="Insights" className="h-full space-y-6">
                <div className="space-between flex items-center pl-4">
                    <TabsList>
                        <TabsTrigger value="Insights" className="relative">
                            Insights
                        </TabsTrigger>
                        <TabsTrigger value="History">History</TabsTrigger>

                    </TabsList>
                     <div className="ml-auto mr-4">
                             <button className="bg-gradient-to-r from-blue-500 via-green-500 to-green-500 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 text-white  py-2 px-4 rounded-lg flex items-center ml-4">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-4 w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>



            
           Send Notification
          </button>
                        </div> 
                </div>
                <TabsContent
                    value="Insights"
                    className="border-none p-0 outline-none"
                >
                    {/* <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Listen Now
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Top picks for you. Updated daily.
                            </p>
                        </div>
                    </div> */}
                    {/* <Separator className="my-4" /> */}
                    <div className="relative">
                        {/* <ScrollArea>
                            <div className="flex space-x-4 pb-4">
                                
                                {listenNowAlbums.map((album) => (
                                        <AlbumArtwork
                                            key={album.name}
                                            album={album}
                                            className="w-[250px]"
                                            aspectRatio="portrait"
                                            width={250}
                                            height={330}
                                        />
                                    ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea> */}
                          </div>
                    {/* <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Your personal playlists. Updated daily.
                        </p>
                    </div> */}
                    {/* <Separator className="my-4" /> */}
                    <div className="relative">
                    <TabChart />
                    </div>
                    
                </TabsContent>
                <TabsContent
                    value="History"
                    className="h-full flex-col border-none p-0 data-[state=active]:flex"
                >
                    <div className="flex items-center justify-between">
                        
                        <div className="space-y-1">
                            {/* <Separator className="my-4" /> */}
                            <TableDemo />
                            {/* <p className="text-sm text-muted-foreground">
                                Your favorite podcasts. Updated daily.
                            </p> */}
                        </div>
                    </div>
                    {/* <Separator className="my-4" />
                    <PodcastEmptyPlaceholder /> */}
                </TabsContent>
            </Tabs>


        </MainLayout>






    )
}