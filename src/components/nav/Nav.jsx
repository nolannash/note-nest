"use client"
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useNavContext } from '@/context/NavContext/NavContext';

const Nav = () => {
    const session = useSession();
    const user = session?.data?.user;
    const router = useRouter();

    const { showNav, toggleNav } = useNavContext();

    const handleLogout = async () => {
        router.push('/');
        await signOut();
    };

    const link = '/'

    const hiddenNav = (
        <div className='pr-4 pl-4 text-white flex justify-between items-center mt-2'>
            <Link href={link}>
                <h1 className='text-3xl font-bold hover:animate-bounce cursor-pointer'>Note Nest</h1>
            </Link>
            <button className='text-white underline  ' onClick={toggleNav}>
                Show Nav
            </button>
        </div>
    );

    const navContent = user ? (
        <div>
            <Link href='/dashboard/profile'>
                <button className='bg-purple-400 p-2 m-2 rounded-lg text-white border-red-300 border-solid'>Profile</button>
            </Link>
            <button className='bg-green-400 m-2 p-2 rounded-lg text-white border-red-300 border-solid' onClick={handleLogout}>
                Logout
            </button>
        </div>
    ) : (
        <div className='flex space-x-4'>
            <Link href='/dashboard/login'>
                <button className='bg-red-200 m-2 p-2 rounded-lg text-white border-red-300 border-solid'>
                    Login
                </button>
            </Link>
            <Link href='/dashboard/register'>
                <button className='bg-blue-200 m-2 p-2 rounded-lg text-white'>Register</button>
            </Link>
        </div>
    );

    const nav = (
        <div className=' text-end text-white text-bold h-auto'>
            <nav className=' pl-2 pr-4 pl-2  inline-grid grid-cols-3 w-full flex-wrap justify-items h-auto'>
                <div className='justify-self-start'>
                    <Link href={link}>
                        <h1 className='text-3xl font-bold hover:animate-bounce pl-2 pt-5 '>Note Nest</h1>
                    </Link>
                </div>


                    {user?<Link href='/note' className='justify-self-center pt-5 text-2xl'>Start A New Note</Link>:<p className='mr-2 mb-2 justify-self-center '>notes, for the visual thinker</p>}


                
                <div className='justify-self-end pt-5 inline-flex'>
                    <button className='text-sm bg-orange-400 border-red-200 border solid rounded-lg m-2 p-2' onClick={toggleNav}>
                Hide Nav
            </button>{navContent}</div>
            </nav>
        </div>
    );

    return <div>{showNav ? nav : hiddenNav}</div>;
};

export default Nav;