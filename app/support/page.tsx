import React from 'react';

export default function Support() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 shadow-md">
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center text-2xl font-semibold mt-2">
          Ayuda
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center p-6 mt-12">
        <div className="text-center text-xl mb-8">
          ¡Hola! Estamos dispuestos a ayudarte en todas las dudas o potenciales dificultades que hayas tenido en tu experiencia con TANTEA FOOD. Queremos ofrecerte en mejor servicio posible, por ello, escríbenos por favor a los siguientes números si has tenido algún inconveniente o duda, estamos a tu disposición.
        </div>

        <div className="w-full p-4 border-t border-b flex items-center justify-start mb-4">
          <div className="mr-4 text-orange-500 text-3xl">
            📞
          </div>
          <div>
            <div className="font-semibold mb-2">Mathias Minchán</div>
            <div>+51 960 825 538</div>
          </div>
        </div>

        <div className="w-full p-4 border-t border-b flex items-center justify-start">
          <div className="mr-4 text-orange-500 text-3xl">
            📞
          </div>
          <div>
            <div className="font-semibold mb-2">Javier Chapilliquen</div>
            <div>+51 955 089 943</div>
          </div>
        </div>
      </div>
    </div>
  );
}