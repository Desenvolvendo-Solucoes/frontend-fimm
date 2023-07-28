import React, { useState } from 'react'
// import { Search } from 'react-feather'

interface SearchProps {
  fields: string[]
  onChange: (query: string) => void
}

const Search: React.FC<SearchProps> = ({ fields, onChange }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
    onChange(value) // Notificar o componente pai com o valor da busca
  }

  return (
    <div className="w-96 ">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder=" 🔍 Pesquisar algum EPI..."
        className="flex w-96 rounded-md border border-gray-300 px-4 py-2 focus:border-gray-300 focus:outline-none"
      />
    </div>
  )
}

export default Search
