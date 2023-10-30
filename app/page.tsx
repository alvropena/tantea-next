import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import PriceInput from './components/PriceInput'

export default function Page() {
  return (
    <div>
      <SearchBar />
      <PriceInput />
    </div>
  )
}
