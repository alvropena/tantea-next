"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Drawer from './drawer';
import Image from 'next/image';
// Icons
import LogoTantea from '@/public/logo-tantea.svg'
import ProfileNavbarIcon from '@/public/profile-navbar.svg'
import ShoppingCartIcon from '@/public/shopping-cart.svg'

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <nav className="p-4">
                <div className="flex items-center justify-between">
                    {/* Profile Icon - Left */}
                    <div>
                        <button onClick={() => setOpen(!isOpen)} className="text-white focus:outline-none">
                            <Image src={ProfileNavbarIcon} alt='profile-navbar' height={40} width={40} />
                        </button>
                    </div>
                    {/* Logo - Centered */}
                    <div >
                        <Link href="/" className="flex-1 text-center">

                            <Image src={LogoTantea} alt='tantea' height={80} />

                        </Link>
                    </div>
                    {/* Shopping Cart Icon - Right */}
                    <div>
                        <Link href="/checkout">

                            <Image src={ShoppingCartIcon} alt='shopping-cart-navbar' height={40} width={40} />

                        </Link>
                    </div>
                </div>
            </nav>
            {isOpen && <Drawer closeDrawer={() => setOpen(false)} />}
        </>
    );
};
