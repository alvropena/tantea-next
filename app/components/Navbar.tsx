"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                {/* Hamburger Button */}
                <div className="lg:hidden">
                    <button onClick={() => setOpen(!isOpen)} className="text-white focus:outline-none">
                        {/* Hamburger Icon */}
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Logo - Centered */}
                <div className="flex-1 text-center">
                    <Link href="/" className="font-semibold text-xl tracking-tight text-white">
                        Logo
                    </Link>
                </div>

                {/* Profile Icon - Right */}
                <div>
                    <Link href="/profile" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">

                        Profile

                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm">
                    <Link href="/link1" className="block mt-4 text-white hover:text-gray-300">
                        Link 1
                    </Link>
                    {/* Add more links here */}
                </div>
            </div>
        </nav>
    );
};