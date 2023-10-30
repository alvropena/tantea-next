import React from 'react'

export default function PriceInput() {
    return (
        <div className="relative w-full h-[500px] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/wood-background.png')" }}>
            {/* Title */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold uppercase">
                ¡Tantea un precio!
            </div>

            {/* Search Input and Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
                <div className="flex items-center h-14 w-96 bg-white rounded-l-lg border border-r-0 border-gray-300">
                    <span className="px-4 text-gray-600">S/.</span>
                    <input
                        type="text"
                        className="flex-grow h-full px-4 focus:outline-none"
                    />
                </div>
                <button
                    className="h-14 w-32 bg-orange-400 text-white font-bold rounded-r-lg hover:bg-orange-500 focus:outline-none"
                >
                    GO!
                </button>
            </div>
        </div>
    )
}
