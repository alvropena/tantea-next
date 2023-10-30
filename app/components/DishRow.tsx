import React from 'react';
import DishCard, { Dish } from './DishCard'; // Make sure to export the Dish type from DishCard.tsx

// Type declaration for component props
type DishRowProps = {
    title: string;
    dishes: Dish[];
};

const DishRow: React.FC<DishRowProps> = ({ title, dishes }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex overflow-x-scroll space-x-4">
                {dishes.map((dish, index) => (
                    <DishCard key={index} dish={dish} />
                ))}
            </div>
        </div>
    );
}

export default DishRow;
