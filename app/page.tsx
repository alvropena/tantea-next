"use client"
import React, { useState, useEffect } from 'react';
import PriceInput from './components/PriceInput';
import DishRow from './components/DishRow';
import UniversityModal from './components/UniversityModal'; // Import the new component
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
