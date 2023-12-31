"use client"
import React from 'react'

export default function SearchBar() {
    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Locales, comida, ... "
                className="w-full h-10 pl-3 pr-10 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
            />
            <button
                className="absolute inset-y-0 right-0 px-4 py-2 rounded-r text-white bg-orange-400 hover:bg-orange-500 focus:outline-none"
            >
                Buscar
            </button>
        </div>

    )
}
