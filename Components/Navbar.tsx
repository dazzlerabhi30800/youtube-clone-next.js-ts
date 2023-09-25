"use client";
import { NavbarUtils } from "@/Utils/NavUtils"
import { useStore } from "@/context/store"
import Link from "next/link"
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const { showMenu } = useStore();
    const pathname = usePathname();
    return (
        <nav className={`${showMenu && "show"}`}>
            {NavbarUtils.map((util, index) => {
                return (
                    <Link key={index} className={`nav--link ${pathname.replace(/%\d{1,2}/g, " ").includes(util.name) && util.type === "category" ? "active" : pathname === '/' && util.type === 'home' ? "active" : ""}`} href={`${util.type === "category" ? "/" + util.name : util.type === "home" ? "/" : ""}`}  >
                        {util.name == "New" ? "Home" : util.name}
                        {util.icon}
                    </Link>
                )
            })}
        </nav >
    )
}