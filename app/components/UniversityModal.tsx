// UniversityModal.tsx
import React from 'react';

interface Props {
  showModal: boolean;
  onClose: () => void;
  onSelectUniversity: (uni: string) => void;
  selectedUniversity: string | null;
}

const UniversityModal: React.FC<Props> = ({ showModal, onClose, onSelectUniversity, selectedUniversity }) => {
  const universities = [
    "Universidad del Pacífico (UP)",
    "UPC San Isidro",
    "UPC San Miguel",
    "Universidad de Piura (UDEP)",
    "USIL La Molina",
    "Universidad Científica del Sur (Miraflores)"
  ];

  return (
    showModal && (
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
              <button 
                key={index} 
                className={`border rounded p-2 ${uni === selectedUniversity ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
                onClick={() => onSelectUniversity(uni)}
              >
                {uni}
              </button>
            ))}
          </div>
          <button onClick={onClose} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Continue
          </button>
        </div>
      </div>
    )
  );
}

export default UniversityModal;
