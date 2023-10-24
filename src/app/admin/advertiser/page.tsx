"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";
import { DataTableDemo } from "../components/data-table";





export default function Advertiser() {


  return (
    <MainLayout>
      <div className="flex items-center justify-between space-y-2 py-3">
        <div className="flex items-center  ml-4">
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
          <h2 className="text-lg  tracking-tight"> Advertiser</h2>
        </div>

      </div>
      <DataTableDemo />

    </MainLayout>






  )
}