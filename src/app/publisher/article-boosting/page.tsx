"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import { useState } from "react";


import React from "react";
import { DialogDemo } from "./components/dialog";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import AddCrad from "./components/card";
import TabChart from "@/components/tabCharts";





export default function ArticleBoosting() {

  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  // Use the useState hook with the initial object state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const [cardGroup, setCardGroup] = useState<JSX.Element[]>([]); // Initialize cardGroup as an empty array
  const [value, setsetvalue] = useState();

  const handleClick = () => {
    // Use the setCardGroup function to update the state
    setCardGroup([...cardGroup, <AddCrad key={cardGroup.length} input1={inputValues.input2} input2={inputValues.input3} />]);
    setInputValues({

      input1: '',
      input2: '',
      input3: ''
    })
  }
  return (

    <MainLayout>
      <div className="flex items-center justify-between space-y-2 py-3">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
          <h2 className="text-lg  tracking-tight"> Article Boosting</h2>
        </div>

      </div>




      <Tabs defaultValue="Insights" className="h-full  space-y-6">
        <div className="space-between flex items-center pl-4">
          <TabsList >
            <TabsTrigger value="Insights" className="relative ">
              Insights
            </TabsTrigger>
            <TabsTrigger value="Manage">Manage</TabsTrigger>

          </TabsList>
          <div className="ml-auto mr-4">
            <DialogDemo handleclick={handleClick} input2={inputValues.input2} input3={inputValues.input3} handleInputChange={handleInputChange}>

              <button className="bg-gradient-to-r from-blue-500 via-green-500 to-green-500 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 text-white  py-2 px-4 rounded-lg flex items-center ml-4">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
                Boost An Article
              </button>

            </DialogDemo >
          </div>
        </div>
        <TabsContent
          value="Insights"
          className="border-none p-0 outline-none"
        >


          <div className="relative">



            <TabChart />



          </div>

        </TabsContent>
        <TabsContent
          value="Manage"
          className="border-none p-0 outline-none"
        >





          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 h-[133px] p-4">
            <AddCrad input1={"محمد بن راشد:  جسور الخير التي تمدها الإمارات مع الشعوب في أوقات الشدة جسور دائمة"} input2={"Duration: May 30 - Jun 1, 2023"} />


            {cardGroup.map((card, index) => (
              <div key={index}>{card}</div>
            ))}
          </div>

          {/* <p className="text-sm text-muted-foreground">
                                Your favorite podcasts. Updated daily.
                            </p> */}


          {/* <Separator className="my-4" />
                    <PodcastEmptyPlaceholder /> */}
        </TabsContent>
      </Tabs>









    </MainLayout>






  )
}