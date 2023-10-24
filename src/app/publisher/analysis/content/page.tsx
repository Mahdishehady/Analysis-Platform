"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"
import TabChart from "@/components/tabCharts";

import React from "react";
import { CalendarDateRangePicker } from "../authors/components/datePicker";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";





export default  function Content()

{
  const [date, setDate] = React.useState<DateRange | { from: Date; to: Date }>({

    from: new Date(2023, 7, 1),
    to: addDays(new Date(2023, 7, 1), 20),
})

    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2 ">
            <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-4 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                <h2 className="text-lg  tracking-tight">Analysis {">"} Content</h2>
                </div>
                <div className="ml-auto">
                    <CalendarDateRangePicker date={date} setDate={setDate} />
                </div>
      </div>
      <TabChart />
            
        </MainLayout>




       
    )
}