import React from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function MyDrawer() {
  const profilePicture = "https://via.placeholder.com/150";
  const router = useRouter();

  return (
    <div className="p-5">
      <div className="mb-5">
        <Image src={profilePicture} alt="Profile" className="rounded-full w-20 h-20 mb-2" />
        <p className="mb-1 text-lg">Mathias Minchan Wolstrohn</p>
        <p>ab.cd@alum.up.edu.pe</p>
      </div>
      <hr className="mb-5 border-gray-200" />
      <div className="flex items-center mb-5 cursor-pointer" onClick={() => router.push("/home")}>
        <i className="mr-2 text-lg"><ion-icon name="home"></ion-icon></i>
        <p>Inicio</p>
      </div>
      <div className="flex items-center mb-5 cursor-pointer" onClick={() => router.push("/mi-cuenta")}>
        <i className="mr-2 text-lg"><ion-icon name="person"></ion-icon></i>
        <p>Perfil</p>
      </div>
      <div className="flex items-center mb-5 cursor-pointer" onClick={() => router.push("/historial-de-pedidos")}>
        <i className="mr-2 text-lg"><ion-icon name="history"></ion-icon></i>
        <p>Historial de pedidos</p>
      </div>
      <div className="flex items-center mb-5 cursor-pointer" onClick={() => router.push("/ayuda")}>
        <i className="mr-2 text-lg"><ion-icon name="help-circle"></ion-icon></i>
        <p>Ayuda</p>
      </div>
      <div className="flex items-center mt-auto mb-5 cursor-pointer">
        <i className="mr-2 text-lg"><ion-icon name="log-in"></ion-icon></i>
        <p>Regístrate o inicia sesión</p>
      </div>
    </div>
  );
}