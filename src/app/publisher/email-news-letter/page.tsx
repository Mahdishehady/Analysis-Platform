"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";
import AddCrad from "./components/newscard";
import TabChart from "@/components/tabCharts";





export default function EmailNewsLetter() {


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
                <div className="flex items-center  ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <h2 className="text-lg  tracking-tight"> EmailNewsLetter</h2>
                </div>

            </div>
            <div className="p-4">
            <TabChart />
            </div>

        </MainLayout>






    )
}