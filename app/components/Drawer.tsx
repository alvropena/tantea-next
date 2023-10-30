import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DrawerProps {
    closeDrawer: () => void;
}

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
                        <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={'/'}>
                            Inicio
                        </Link>
                        <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/explore"}>
                            Explora
                        </Link>
                        <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/profile"}>
                            Mi cuenta
                        </Link>
                        <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/history"}>
                            Historial de pedidos
                        </Link>
                        <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/current-order"}>
                            Pedido en curso
                        </Link>
                        <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/support"}>
                            Ayuda
                        </Link>
                    </div>
                    <div className="mt-4">
                        <Link className="text-gray-600 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded" href={"/sign-up"}>
                            Regístrate / ingresa
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
