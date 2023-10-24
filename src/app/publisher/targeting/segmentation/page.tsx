"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";
import AddCrad from "./components/card";





export default function content() {


  return (
    <MainLayout>
      <div className="flex items-center justify-between space-y-2 py-3">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ml-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          <h2 className="text-lg  tracking-tight">Targeting {">"} Segmentation</h2>
        </div>
        <button className="bg-gradient-to-r from-blue-500 via-green-500 to-green-500 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 text-white  py-2 px-4 rounded-lg flex items-center ml-4">

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
</svg>
  CREATE
</button>
      </div>



      
      <div className="grid p-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AddCrad input1={"Mobile Users"} input2={"1 dimension"} input3={"0%"} />
        <AddCrad input1={"Users with high CRT"} input2={"1 dimension"} input3={"10%"} />
      </div>



    </MainLayout>





  )
}