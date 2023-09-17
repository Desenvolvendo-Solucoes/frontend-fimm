'use client'
import { Data } from '@/types'
import React, { useState } from 'react'
// import { Search } from 'react-feather'

interface SearchProps {
  fields: Data[]
  // onChange: (query: string) => void
}

const Search: React.FC<SearchProps> = ({ fields }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
    // onChange(value) // Notificar o componente pai com o valor da busca
  }

  return (
    <div className="w-1/4 ">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder=" 🔍 Pesquisar algum EPI..."
        className="flex w-11/12 rounded-md border border-gray-300 px-4 py-2 focus:border-gray-300 focus:outline-none"
      />
    </div>
  )
}

export default Search