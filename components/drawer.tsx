import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Icons
import HomeIcon from '@/public/home.svg';
import SearchIcon from '@/public/search.svg';
import ProfileIcon from '@/public/profile.svg';
import HistoryIcon from '@/public/history.svg';
import CurrentOrderIcon from '@/public/current-order.svg';
import SupportIcon from '@/public/support.svg';
import SignInIcon from '@/public/sign-in.svg';

interface DrawerProps {
    closeDrawer: () => void;
}

interface DrawerLinkProps {
    icon: StaticImageData;
    alt: string;
    href: string;
    label: string;
}

const DrawerLink: React.FC<DrawerLinkProps> = ({ icon, alt, href, label }) => (
    <Link className="text-gray-600 cursor-pointer hover:bg-gray-100 p-2 rounded flex flex-row items-center mb-4" href={href}>
        <Image src={icon} alt={alt} height={20} width={20} className="mr-2" />
        {label}
    </Link>
);

const Drawer: React.FC<DrawerProps> = ({ closeDrawer }) => {
    return (
        <div onClick={closeDrawer} className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex z-50">
            <div className="w-64 p-8 bg-white shadow-lg rounded-lg flex flex-col">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 flex items-center justify-center bg-orange-500 rounded-full text-white text-4xl mr-5">
                        T
                    </div>
                    <div className="text-lg text-gray-700 mt-8 align-middle">
                        ¿Qué se te antoja tantero?
                    </div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                    <div className='flex flex-col'>
                        <DrawerLink icon={HomeIcon} alt="home" href="/" label="Inicio" />
                        <DrawerLink icon={SearchIcon} alt="search" href="/explore" label="Explora" />
                        <DrawerLink icon={ProfileIcon} alt="profile" href="/profile" label="Mi cuenta" />
                        <DrawerLink icon={HistoryIcon} alt="history" href="/history" label="Historial de pedidos" />
                        <DrawerLink icon={CurrentOrderIcon} alt="current-order" href="/current-order" label="Pedido en curso" />
                        <DrawerLink icon={SupportIcon} alt="support" href="/support" label="Ayuda" />
                    </div>
                    <div className="mt-4">
                        <DrawerLink icon={SignInIcon} alt="sign-in" href="/sign-up" label="Regístrate / ingresa" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
