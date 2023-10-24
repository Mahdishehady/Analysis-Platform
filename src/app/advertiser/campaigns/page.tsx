"use client"
import { DataTableDemo } from "@/app/admin/components/data-table";
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";





export default  function Campaigns()

{


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
            <div className="flex items-center  ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
                <h2 className="text-lg  tracking-tight"> Campains</h2>
                </div>
               
              </div>
              <DataTableDemo />
        </MainLayout>


                


       
    )
}