"use client"
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const Nav = () => {
    const session = useSession();
    const user = session?.data?.user;

    const navContent = user ? (
        <div>
            <Link href='/dashboard/profile'>
                <button className='bg-purple-200'>
                    Profile
                </button>
            </Link>
            <Link href='/'>
                <button className='bg-green-200' onClick={signOut}>
                    Logout
                </button>
            </Link>
        </div>
    ) : (
        <div>
            <Link href='/dashboard/login'>
                <button className='bg-red-200'>Login</button>
            </Link>
            <Link href='/dashboard/register'>
                <button className='bg-blue-200'>Register</button>
            </Link>
        </div>
    );

    return (
        <nav className='pt-4 pb-4 pr-4 pl-2 bg-white text-black inline-grid grid-cols-2 w-full flex-wrap justify-items'>
            <Link href={user !== undefined?'/home':'/'} className='justify-self-start'>
                <h1 className='text-3xl font-bold hover:animate-bounce'>Note Nest</h1>
            </Link>

            <div className='justify-self-end space-x-4'>{navContent}</div>
        </nav>
    );
};

export default Nav;