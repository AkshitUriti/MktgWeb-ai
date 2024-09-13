'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Mountain, Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Mountain className="h-8 w-8 text-purple-700" />
              <span className="ml-2 text-xl font-bold text-black">MktgWeb</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button className="bg-purple-700 text-white hover:bg-purple-800">
              Get Started
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-700 hover:text-purple-800 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <Button className="w-full bg-purple-700 text-white hover:bg-purple-800">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold text-black hover:border-purple-700 hover:text-purple-700 transition duration-150 ease-in-out" // {{ edit_1 }}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-bold text-black hover:text-purple-700 hover:bg-purple-50 hover:border-purple-700 transition duration-150 ease-in-out" // {{ edit_2 }}
    >
      {children}
    </Link>
  )
}