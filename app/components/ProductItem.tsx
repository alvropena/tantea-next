import React from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ProductItem({ product }) {
  const displayName =
    product.name.length > 12
      ? product.name.substring(0, 12) + "..."
      : product.name;
  const router = useRouter();

  return (
    <div className="p-2 cursor-pointer" onClick={() => router.push(`/order-details/${product.id}`)}>
      <div className="w-48 h-24">
        <Image src={product.imageUri} alt={product.name} layout="fill" className="object-cover rounded-md" />
      </div>
      <div className="flex justify-between items-center mt-2 mb-1 mx-1">
        <p className="text-lg font-medium">{displayName}</p>
        <div className="flex items-center">
          <p className="mr-1">{product.ratings}</p>
          <i className="text-yellow-500"><ion-icon name="star"></ion-icon></i>
        </div>
      </div>
      <div className="flex justify-between items-center mx-1">
        <p>{product.delivery}</p>
        <p className="text-red-500 text-sm">${product.price}</p>
      </div>
    </div>
  );
}