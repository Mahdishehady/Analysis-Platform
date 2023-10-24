"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";
import AddCrad from "./components/surveycard";





export default function Survey() {


    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 py-3">
                <div className="flex items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>
                    <h2 className="text-lg  tracking-tight"> Survey</h2>
                </div>

            </div>
            <div className="pt-10">
                <button className="bg-gradient-to-r from-blue-500 via-green-500 to-green-500 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 text-white  py-2 px-4 rounded-lg flex items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    Create New Survey
                </button>
            </div>
            <div className="p-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    <AddCrad />
                </div>
            </div>

        </MainLayout>






    )
}