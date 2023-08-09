"use client"
import React from 'react'
import Link from 'next/link'


//! Probably make "buttons" a component(?)
const Nav = () => {
    return (
    <nav className="pt-4 pb-4 pr-4 pl-2 bg-white text-black inline-grid grid-cols-2 w-full flex-wrap justify-items">
        <Link href='/' className="justify-self-start">
            <h1 className='text-3xl font-bold hover:animate-bounce'>Note Nest</h1>
        </Link>

        <div className='justify-self-end space-x-4'>

            <Link href='/dashboard/login' className=''>
                <button className="bg-red-200">Login</button>
            </Link>

            <Link href='/dashboard/register' >
            <button className="bg-blue-200">Register</button>
            </Link>
            <button className='bg-purple-200'>Profile</button>
            <button className='bg-green-200'>Logout</button>

        </div>
    </nav>
    )
}

export default Nav