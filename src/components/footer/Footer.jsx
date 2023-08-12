
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
    <div className=" inline-grid grid-cols-3 w-full bottom-0px pt-4 pb-2 fixed inset-x-0 bottom-0 bg-white text-black">
        <div className='justify-self-start'>Copyright 2023: Note Nest. All Rights Reserved</div>
        <div className='justify-self-center'><Link href='/about'>About </Link>| <Link href='/faq'>FAQ </Link> | <Link href='/contact'>Contact </Link></div>
        <div className='justify-self-end pr-4'> Other Footer Stuff</div>
    </div>
    
    )
}

export default Footer