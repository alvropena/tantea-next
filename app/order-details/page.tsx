"use client"
import React from 'react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const FoodCard = () => {
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

    return (
        <div className="border p-4 w-80">
            <Image src="/path-to-your-image.jpg" width={320} height={180} alt="Tipakay + chaufa" />

            <h2 className="font-bold text-xl mt-4">Tipakay + chaufa</h2>
            <span className="text-red-600 font-bold text-lg">S/ 18.50</span>
            <span className="text-xs text-gray-600">Delivery gratis</span>

            <div className="mt-2">
                <p>Prote: <span className="font-bold">20g</span></p>
                <p>Grasas: <span className="font-bold">20g</span></p>
                <p>Carbo: <span className="font-bold">20g</span></p>
            </div>

            <p className="mt-2">Pollo tipakay (200gr) y arroz chaufa. Viene en combo con una entrada y una gaseosa inkaicola.</p>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        <RadioGroup defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Option One</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Option Two</Label>
                            </div>
                        </RadioGroup>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>


            <div className="flex items-center mt-3">
                <button className="border px-2">-</button>
                <input className="border mx-2 w-8 text-center" type="text" value="1" readOnly />
                <button className="border px-2">+</button>
                <button className="bg-red-600 text-white ml-3 px-4 py-2">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default FoodCard;
