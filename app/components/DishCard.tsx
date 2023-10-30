import React from 'react'

export default function DishCard({ dish }) {
    return (




        <div className="flex flex-col w-72 mx-2 rounded-lg shadow-md overflow-hidden bg-white">
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-gray-800 font-medium">{dish.restaurant}</h3>
                <p className="text-gray-600">{dish.name}</p>
                <p className="text-xl font-bold mt-2">{dish.price}</p>
                {dish.delivery && <span className="text-green-500">{dish.delivery}</span>}
            </div>
        </div>




    )
}
