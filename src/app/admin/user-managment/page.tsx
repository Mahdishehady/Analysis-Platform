"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";
import { DataTableDemo } from "../components/data-table";





export default  function UserManagment()

{


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
            <div className="flex items-center  ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
                <h2 className="text-lg  tracking-tight"> User Managment</h2>
                </div>
               
              </div>
              <DataTableDemo />
        </MainLayout>


                


       
    )
}