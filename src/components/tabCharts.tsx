"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddCrad from "@/app/publisher/email-news-letter/components/newscard";
import { Overview } from "@/app/publisher/analysis/authors/components/overViewChart";
import Example from "@/app/publisher/analysis/authors/components/ScatterChart";





export default function TabChart() {

    return (
        <>
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

        </>





    )
}