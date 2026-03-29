"Use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Income", href: "/income" },
    { label: "Expenses", href: "/expenses" },
    { label: "History", href: "/history" },
]