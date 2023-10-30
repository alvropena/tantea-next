"use client"
import React, { useState, useEffect } from 'react';
import PriceInput from './components/PriceInput';
import DishRow from './components/DishRow';
import { sampleDishes } from './data/data';

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const universities = [
    "Universidad del Pacífico (UP)",
    "UPC San Isidro",
    "UPC San Miguel",
    "Universidad de Piura (UDEP)",
    "USIL La Molina",
    "Universidad Científica del Sur (Miraflores)"
  ];

  const handleContinue = () => {
    // Handle logic here when the continue button is clicked
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/2">
            <h2 className="text-xl mb-4">Ingresa tu universidad</h2>
            <input
              type="text"
              placeholder="Universidad"
              className="mb-4 border rounded w-full p-2"
            />
            <div className="mt-4 grid gap-2">
              {universities.map((uni, index) => (
                <button key={index} className="border rounded p-2 hover:bg-gray-200">
                  {uni}
                </button>
              ))}
            </div>
            <button onClick={handleContinue} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Continue
            </button>
          </div>
        </div>
      )}
      <PriceInput />
      <DishRow title="El menu del día" dishes={sampleDishes} />
    </div>
  );
}
