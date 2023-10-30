"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

// Type declaration for a single dish
export type Dish = {
    restaurant: string;
    name: string;
    price: string;
    delivery: string;
    rating: string;
    image: string;
};

// Type declaration for component props
type DishCardProps = {
    dish: Dish;
};

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
    const router = useRouter();

    // const handleAddClick = () => {
    //     router.push({
    //         href: '/order-details',
    //         options: {
    //             restaurant: dish.restaurant,
    //             name: dish.name,
    //             price: dish.price,
    //             delivery: dish.delivery,
    //             rating: dish.rating,
    //             image: dish.image,
    //         },
    //     });
    // }

    return (
        <div className="relative w-72 h-72 mx-2 rounded-lg shadow-lg overflow-hidden bg-white">

            {/* Dish Image */}
            <Image
                src={dish.image}
                alt={dish.name}
            />

            {/* Info Box */}
            <div className="absolute bottom-0 bg-white bg-opacity-80 p-4 w-full">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-gray-800 font-medium">{dish.restaurant}</h3>
                    <span className="text-orange-400">★ {dish.rating}</span>
                </div>
                <p className="text-gray-700 mb-2">{dish.name}</p>
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">{dish.price}</p>
                    <span className="text-white bg-orange-400 px-2 py-1 rounded">{dish.delivery}</span>
                </div>
            </div>

            {/* Add Button */}
            <button className="absolute top-2 right-2 bg-orange-400 text-white">
                +
            </button>
        </div>
    )
}

export default DishCard;
