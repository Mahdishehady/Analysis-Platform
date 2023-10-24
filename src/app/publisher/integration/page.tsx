"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";





export default  function Integration()

{


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
            <div className="flex items-center  ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <h2 className="text-lg  tracking-tight"> Integration</h2>
                </div>
               
              </div>
            
        </MainLayout>


                


       
    )
}