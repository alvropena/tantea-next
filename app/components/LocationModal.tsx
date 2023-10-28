import React from "react";

export default function LocationModal({ modalVisible, setModalVisible }) {
  if (!modalVisible) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Elige tu locación
              </h3>
              {[
                "Universidad del Pacífico",
                "Universidad de Lima",
                "Universidad Peruana de Ciencias Aplicadas",
              ].map((uni) => (
                <button
                  key={uni}
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                  onClick={() => {
                    /* Handle university selection here, if needed */
                  }}
                >
                  {uni}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setModalVisible(false)}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}