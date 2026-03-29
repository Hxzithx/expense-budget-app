"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Income", href: "/income" },
    { label: "Expenses", href: "/expenses" },
    { label: "History", href: "/history" },
]

export default function SideBar() {
    const pathname = usePathname();

    return (
        <div className="w-56 min-h-screen bg-gray-900 text-white flex flex-col p-4">

     
        <div className="mb-8 mt-2">
            <h1 className="text-x1 font-bold text-white">Budget App</h1>
            <p className="text-gray-400 text-xs mt-1">Track Your Money</p>
        </div>
        {/*nav links*/}
        <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                    <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                     isActive
                     ? "bg-blue-600 text-white font-medium"
                     : "text-gray-400 hover:bg-gray-500 hover:text-white"
                    }`}>
                        {link.label}
                    </Link>
                )
            })}
        </nav>
        </div>
    )
}