import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-center border p-2 rounded-md border-gray-200">
      <button onClick={decrement} className="px-2">
        <i><ion-icon name="remove"></ion-icon></i>
      </button>
      <p className="px-5 text-lg">{count}</p>
      <button onClick={increment} className="px-2">
        <i><ion-icon name="add"></ion-icon></i>
      </button>
    </div>
  );
}