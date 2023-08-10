
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
    <div className=" inline-grid grid-cols-3 w-full bottom-0px pt-4 pb-2 fixed inset-x-0 bottom-0 bg-slate-300 text-fuchsia-950">
        <div className='justify-self-start'>Copyright 2023: Note Nest. All Rights Reserved</div>
        <div className='justify-self-center'><Link href='/'>About </Link>| <Link href='/'>FAQ </Link> | <Link href='/'>Contact </Link></div>
        <div className='justify-self-end pr-4'> Other Footer Stuff</div>
    </div>
    
    )
}

export default Footer