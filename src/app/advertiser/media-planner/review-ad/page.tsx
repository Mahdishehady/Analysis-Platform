"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";





export default  function ReviewAd()

{


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ml-4 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
                <h2 className="text-lg  tracking-tight">MediaPlanner {">"} ReviewAd</h2>
                </div>
               
              </div>
            
        </MainLayout>
        




       
    )
}