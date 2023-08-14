
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
    <footer className=" inline-grid grid-cols-3 w-full bottom-0px pt-4 pb-2 fixed inset-x-0 bottom-0  text-white bg-opacity-100 ">
        <div className='justify-self-start ml-4 '>Copyright 2023: Note Nest. All Rights Reserved</div>
        <div className='justify-self-center inline-flex gap-2'>
            <Link href='/about'>
                <p className='hover:underline'>About</p>
            </Link>| 
            <Link href='/faq'><p className='hover:underline'>FAQ</p> </Link>
            | <Link href='/contact'><p className='hover:underline'>Contact</p> </Link></div>
        <div className='justify-self-end mr-4'> Other Footer Stuff</div>
    </footer>
    
    )
}

export default Footer