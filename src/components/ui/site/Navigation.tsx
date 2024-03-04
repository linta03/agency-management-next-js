import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/assets/plura-logo.svg"
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import {ModeToggle} from '@/components/global/ModeToggle'
type Props = {
    user?: null | User
}

const Navigation = ({ user }: Props) => {
    return (
        <div className='bg-transparent sticky top-0 backdrop-blur-lg  p-4 z-[9999] flex items-center justify-between'>
            <aside className='flex gap-2 items-center'>
                <Image src={logo} width={40} height={40} alt='plura logo' />
                <p className='text-xl font-bold'>Plura.</p>
            </aside>
            <nav className='hidden md:block'>
                <ul className='flex gap-4 text-base dark:text-white dark:text-muted-foreground  text-black font-medium'>
                    <Link href={"#"} className='link_after'>Pricing</Link>
                    <Link href={"#"} className='link_after'>About</Link>
                    <Link href={"#"} className='link_after'>Documentation</Link>
                    <Link href={"#"} className='link_after'>Features</Link>
                </ul>
            </nav>
            <aside className='flex gap-2 items-center'>
                <Link className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80" href={"/agency"}>Log In</Link>
                <UserButton/>
                <ModeToggle/>
            </aside>
        </div>
    )
}

export default Navigation