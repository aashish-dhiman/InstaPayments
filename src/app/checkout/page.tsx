"use client";
import React, { useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import TabbedList from "@/components/checkout/TabbedList";
import { Separator } from "@/components/ui/separator";


interface Props {}

export default function Home() {
    const { products, paymentOptions, finalPrice } = useSelector(
        (state: RootState) => state.dataReducer
    );
   
    return (
        <div className="container mx-auto lg:px-40 w-full mt-5 pb-8">
            <div className="border-2 p-2 sm:p-8 min-h-[500px] rounded-lg flex flex-col">
                <h1 className="text-3xl font-bold mb-4 w-full ">Payment</h1>
                <div className="flex-1">
                    <TabbedList />
                </div>
                <div>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between font-medium">
                        <span>Total</span>
                        <span>${finalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
