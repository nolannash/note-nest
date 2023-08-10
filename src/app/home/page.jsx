"use client"
import React from 'react'
import { useSession } from "next-auth/react";

const UserHome = () => {
    const session = useSession();

    return (
    <div>UserHome</div>
    )
}

export default UserHome