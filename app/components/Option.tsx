import React from "react";

export default function Option({ label, selected, onSelect }) {
  return (
    <div className="flex items-center cursor-pointer" onClick={onSelect}>
      {selected ? (
        <i className="mr-2 text-lg"><ion-icon name="checkmark-circle"></ion-icon></i>
      ) : (
        <i className="mr-2 text-lg"><ion-icon name="ellipse-outline"></ion-icon></i>
      )}
      <p>{label}</p>
    </div>
  );
}