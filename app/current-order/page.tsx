import React from 'react';

interface OrderScreenProps {
  orderConfirmed: boolean;
}

const OrderScreen: React.FC<OrderScreenProps> = ({ orderConfirmed }) => {
  return (
    <div className="p-5">
      {orderConfirmed ? (
        <div className="flex flex-col items-center justify-center">
          {/* Content for the confirmed order */}
          <h1 className="text-2xl font-bold mb-3">Pedido Confirmado</h1>
          {/* ... other components for the confirmed order */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-3">Pedido por confirmar</h1>
          <p className="mb-5 text-center">
            Le acabamos de enviar un mensaje al restaurante para que confirme tu pedido. 
            Espera la confirmación un máximo de 5 minutos por favor.
            Te llegará un mensaje de confirmación a tu número telefónico cuando tu pedido haya sido confirmado. 
            ¡Muchas gracias por tantear!
          </p>
          <div className="w-full">
            <div className="flex justify-between mb-3">
              <span>NUMERO DE ORDEN</span>
              <span className="font-semibold">1543</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>FECHA DE ORDEN</span>
              <span className="font-semibold">04/04/2024</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>RESTAURANTE</span>
              <span className="font-semibold">CHIFA GUO SHENG</span>
            </div>
            <div className="flex justify-between">
              <span>MEDIO DE PAGO</span>
              <span className="font-semibold">Yape</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderScreen;
