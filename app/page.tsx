"use client"
import React, { useState, useEffect } from 'react';
import PriceInput from './components/price-input';
import DishRow from './components/dish-row';
import UniversityModal from './components/university-modal'; // Import the new component
import { sampleDishes } from './data/data';

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      <UniversityModal
        showModal={showModal}
        selectedUniversity={selectedUniversity}
        onSelectUniversity={(uni: string) => setSelectedUniversity(uni)}
        onClose={() => setShowModal(false)}
      />
      <PriceInput />
      <DishRow title="El menu del día" dishes={sampleDishes} />
    </div>
  );
}
