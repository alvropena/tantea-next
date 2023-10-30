import React from 'react';

const OrderHistory = () => {
    const orders = [
        { status: "ENTREGADO", date: "23 / 06 / 2023", time: "16:05", restaurant: "CHIFA GUO SHENG", items: ["Tipakay + chaufa"], price: "S/. 18.50" },
        { status: "CANCELADO", date: "21 / 06 / 2023", time: "12:25", restaurant: "CHIFA GUO SHENG", items: ["Chijaukay+ chaufa"], price: "S/. 17.50" },
        { status: "ENTREGADO", date: "19 / 06 / 2023", time: "13:24", restaurant: "DORITA", items: ["Milanesa con papas doradas (x2)"], price: "S/. 12.00" },
        { status: "ENTREGADO", date: "16 / 06 / 2023", time: "11:11", restaurant: "DORITA", items: ["Milanesa con papas doradas", "Aji de Gallina", "Pollo a la plancha con arroz y ..."], price: "S/. 36.00" },
    ];

    return (
        <div className="bg-gray-100 h-screen">
            <div className="py-6 px-4 bg-white shadow-md">
                <h1 className="text-xl font-semibold">Historial de pedidos</h1>
            </div>
            <div className="mt-4">
                {orders.map((order, index) => (
                    <div key={index} className="bg-white m-4 p-4 rounded-md shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-red-500 font-medium">{order.status}</span>
                            <span className="text-gray-600">{order.date} | {order.time}</span>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">{order.restaurant}</p>
                        </div>
                        <ul className="mb-4">
                            {order.items.map((item, idx) => (
                                <li key={idx} className="text-gray-600">{item}</li>
                            ))}
                        </ul>
                        <div className="text-right font-bold text-xl">{order.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistory;
