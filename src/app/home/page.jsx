"use client"
import React from 'react'
import { useSession } from "next-auth/react";

const UserHome = () => {
    const session = useSession();

    console.log(session)
    console.log(session?.data?.user)
    return (
    <div>UserHome</div>
    )
}

export default UserHome