import React from 'react';
import Link from 'next/link';

interface DrawerProps {
    closeDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ closeDrawer }) => {
    return (
        <div onClick={closeDrawer} className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex z-50">
            <div className="w-64 p-8 bg-white shadow-lg rounded-lg">
                <div className="flex items-center mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-full text-white text-2xl mr-5">
                        T
                    </div>
                    <div className="text-lg text-gray-700">
                        ¿Qué se te antoja tantero?
                    </div>
                </div>
                <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={'/'}>
                    Inicio
                </Link>
                <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/explore"}>
                    Explora
                </Link>
                <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/support"}>
                    Ayuda
                </Link>
                <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/sign-up"}>
                    Regístrate / ingresa
                </Link>
            </div>
        </div>
    );
}

export default Drawer;
