"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="relative z-20 mt-5 mb-16 flex justify-center gap-16">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-sm font-normal transition-colors tracking-tight ${
              isActive ? "text-black" : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {item.name}

            {isActive && (
              <motion.div
                layoutId="active-nav-indicator"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neutral-900"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        )
      })}
    </header>
  )
}