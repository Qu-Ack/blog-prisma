'use client'


import Image from "next/image"
import Tiger from "@/public/tiger.svg"
import Github from "@/public/github.svg"
import Link from "next/link"
import Instagram from "@/public/instagram.svg"
import Linkedin from "@/public/linkedin.svg"
import { SignedIn, UserButton } from "@clerk/nextjs"
import { SignedOut } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import clsx from "clsx"



export default function NavBar() {

    const { user } = useUser();
    const pathname = usePathname();
    const writelink = '/write';
    const homelink = '/'

    return (
        <>
            <div className="flex justify-between w-screen bg-lime-800 h-[7vh] text-white font-sans text-sm pr-[256px] pl-[256px] items-center">
                {user ? <p>{`${user.firstName} ${user.lastName}`}</p> : ""}
                <div className="flex gap-[2rem]">
                    <SignedOut >
                        <Link href="/sign-in" >Sign In</Link>
                        <Link href="/sign-up">Sign Up</Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>

            </div>
            <nav className="flex ml-[12rem] w-[80vw] justify-around pl-[256px] pr-[256px] pt-8 pb-8 border-black-300 border-b-3">
                <div className="flex">
                    <ul className="flex gap-[5rem] list-none items-center">
                        <li>
                        <Link  className={clsx("hover:text-slate-400 transition-all", 
                                {
                                    'text-green-500' : pathname == homelink
                                }
                            )} href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            About Me
                        </li>
                    </ul>
                </div>

                <Image src={Tiger} alt="tiger" width={50} height={50} />

                <div className="flex">
                    <ul className="flex gap-[5rem] list-none items-center">
                        <li>
                            <Link  className={clsx("hover:text-slate-400 transition-all", 
                                {
                                    'text-green-500' : pathname == writelink
                                }
                            )} href="/write">
                                Write
                            </Link>
                        </li>
                        <li>
                            Drafts
                        </li>
                    </ul>
                </div>

            </nav>

            {/* <div className="h-[20vh] w-screen bg-orange-300 flex flex-col gap-[0.5rem] justify-center">
                <Link className="flex justify-center items-center gap-[1rem] text-white font-sans" href="https://github.com/Qu-Ack">
                    Follow Me on My Github
                    <Image src={Github} alt="github" width={20} height={20} />
                </Link>
                <Link className="flex justify-center items-center gap-[1rem] text-white font-sans" href="https://www.instagram.com/daksh_sangal/">
                    Follow Me on My Instagram
                    <Image src={Instagram} alt="github" width={20} height={20} />
                </Link>
                <Link className="flex justify-center items-center gap-[1rem] text-white font-sans" href="https://www.linkedin.com/in/daksh-sangal-529b10243/">
                    Connect with me on Linkedin
                    <Image src={Linkedin} alt="github" width={20} height={20} />
                </Link>
            </div> */}
        </>
    )
}