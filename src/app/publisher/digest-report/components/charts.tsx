




"use client"
import MainLayout from "@/components/layout/MainLayout/MainLayout"

import React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddCrad from "@/app/publisher/email-news-letter/components/newscard";
import { Overview } from "@/app/publisher/analysis/authors/components/overViewChart";
import Example from "@/app/publisher/analysis/authors/components/ScatterChart";





export default function Charts() {

    return (
        <>
            
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
    )}