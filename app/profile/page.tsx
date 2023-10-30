import React from 'react';

const AccountScreen: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-8">
        <button className="text-xl">
          <span>◀</span>
        </button>
        <h1 className="text-2xl font-bold">Mi cuenta</h1>
        <div className="w-10"></div> {/* Spacer for centering title */}
      </div>

      <div className="bg-white rounded p-4 mb-4 shadow">
        <AccountDetail label="Nombre" value="Mathias Minchan Wolstrohn" />
        <AccountDetail label="Universidad" value="Universidad del Pacífico" />
        <AccountDetail label="Teléfono" value="987 654 321" />
        <AccountDetail label="Correo universitario" value="ab.cd@alum.up.edu.pe" />
      </div>

      <button className="bg-orange-500 p-4 rounded text-white w-full font-semibold">
        Actualizar
      </button>
    </div>
  );
}

const AccountDetail: React.FC<{ label: string, value: string }> = ({ label, value }) => {
  return (
    <div className="border-b border-gray-200 py-2 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
      <button className="bg-orange-500 p-2 rounded text-white text-sm">
        editar
      </button>
    </div>
  );
}

export default AccountScreen;
