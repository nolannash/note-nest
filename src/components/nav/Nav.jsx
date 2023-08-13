"use client"
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Nav = () => {
    const session = useSession();
    const user = session?.data?.user;
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(); 
        router.push('/'); 
    };
    
    const navContent = user ? (
        <div>
            <Link href='/dashboard/profile'>
                <button className='bg-purple-200 p-2 '>
                    Profile
                </button>
            </Link>
                <button className='bg-green-200' onClick={handleLogout}>
                    Logout
                </button>
        </div>
    ) : (
        <div className='flex flex-grid grid-cols-2'>
            <Link href='/dashboard/login'>
                <button className='bg-red-200 p-2 rounded-lg text-white  border-red-300 border-solid'>Login</button>
            </Link>
            <Link href='/dashboard/register'>
                <button className='bg-blue-200 p-2 rounded-lg text-white'>Register</button>
            </Link>
        </div>
    );

    return (
        <div className='p-4 text-end bg-white text-black text-bold hover:h-auto'>

            <nav className='pt-4 pb-4 pr-4 pl-2 bg-white text-black inline-grid grid-cols-3 w-full flex-wrap justify-items'>
                <Link href={user !== undefined?'/home':'/'} className='justify-self-start'>
                    <h1 className='text-3xl font-bold hover:animate-bounce'>Note Nest</h1>
                </Link>

                <div className='text-black text-2xl justify-self-center'>notes, for the visual thinker</div>
                <div className='justify-self-end space-x-4'>{navContent}</div>
            </nav>
        </div>
    );
};

export default Nav;

//            <summary className=' justify-self-center text-lg'>show/hide NAV</summary>