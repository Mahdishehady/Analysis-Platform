"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";



export default  function AiConfigs()

{


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
            <div className="flex items-center  ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                </svg>
                <h2 className="text-lg  tracking-tight"> AI Configs</h2>
                </div>
               
              </div>
            
        </MainLayout>


                


       
    )
}