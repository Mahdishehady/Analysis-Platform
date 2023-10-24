"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"
import { CalendarDateRangePicker } from "./components/datePicker"
import React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import AddCrad from "../../email-news-letter/components/newscard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "./components/overViewChart";
import Example from "./components/ScatterChart";



export default function Authors() {

    const [date, setDate] = React.useState<DateRange | { from: Date; to: Date }>({

        from: new Date(2023, 7, 1),
        to: addDays(new Date(2023, 7, 1), 20),
    })

    return (
        <MainLayout>
            <div className="flex items-center justify-between space-y-2">
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
                    <h2 className="text-lg  tracking-tight">Analysis {">"} Authors</h2>
                </div>
                <div className="ml-auto">
                    <CalendarDateRangePicker date={date} setDate={setDate} />
                </div>
            </div>
            <div className="p-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                    <AddCrad input1={"Total Users Reached"} input2={"710"} />
                    <AddCrad input1={"Emails Opened"} input2={"July-7-2015"} />
                    <AddCrad input1={"Most Reactive Segment"} input2={"Rish South Area"} />
                    <AddCrad input1={"least Reactive Segment"} input2={"Elderly Locals"} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Clicks By Time</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <Overview />
                    </CardContent>
                </Card>
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Author Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <Example />
                    </CardContent>
                </Card>

            </div>

        </MainLayout>





    )
}