"use client"
import React from 'react';
import { useSession } from "next-auth/react";

const UserHome = () => {
    const session = useSession();

    return (
        <div className="flex grid grid-rows-3  gap-4 w-full overflow-y-auto p-5">
    
            <div className="p-5  shadow rounded-lg hover:shadow-2xl hover:brightness-200 hover:border hover:border-4 hover:border-slate-900">
                <div className="flex justify-between items-center mb-3">
                    <h1 className="text-lg font-semibold">Your Threads</h1>
                    <button className="text-pink-500">Go to Threads</button>
                </div>
                <details className="text-center">
                    <summary className=" text-green-500">More Details</summary>
                    <div>**add threads stuff here**</div>
                </details>
            </div>

            <div className="p-5 bg-slate-700 shadow rounded-lg hover:shadow-2xl hover:brightness-200 hover:border hover:border-4 hover:border-slate-500">
                <div className="flex justify-between items-center mb-3">
                    <h1 className="text-lg font-semibold">Your Notes</h1>
                    <button className="text-pink-500">Go to Notes</button>
                </div>
                <details className="text-center">
                    <summary className=" text-green-500">More Details</summary>
                    <div>**add notes stuff here**</div>
                </details>
            </div>

            <div className="p-5 bg-slate-500 shadow rounded-lg hover:shadow-2xl hover:brightness-150 hover:border hover:border-4 hover:border-slate-300">
                <div className="flex justify-between items-center mb-3">
                    <h1 className="text-lg font-semibold">Your Tags</h1>
                    <button className="text-pink-500">Go to Tags</button>
                </div>
                <details className="text-center">
                    <summary className="text-green-500">More Details</summary>
                    <div className="text-left">**add tags stuff here**</div>
                </details>
            </div>

        </div>
    );
}

export default UserHome;
