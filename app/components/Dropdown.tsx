import React, { useState } from "react";
import Option from "./Option";

export default function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="py-2 border-t border-gray-200">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <p className="text-lg font-medium my-2">{title}</p>
        <i><ion-icon name={isOpen ? "chevron-up" : "chevron-down"}></ion-icon></i>
      </div>

      {isOpen &&
        options.map((option, idx) => (
          <Option
            key={idx}
            label={option}
            selected={option === selectedOption}
            onSelect={() => setSelectedOption(option)}
          />
        ))}
    </div>
  );
}