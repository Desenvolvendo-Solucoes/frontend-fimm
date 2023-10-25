'use client'
import { Data } from '@/types'
import React, { useState } from 'react'
// import { Search } from 'react-feather'

interface SearchProps {
  fields: Data[]
  setFields: React.Dispatch<React.SetStateAction<Data[]>>
}

const Search: React.FC<SearchProps> = ({ fields, setFields }) => {
  const [query, setQuery] = useState('')
  const [original] = useState(fields)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log(value)

    setQuery(value)
    if (value === '') {
      console.log('value === ""')

      setFields(original)
    } else {
      const newFields: Data[] = original.filter((values) => {
        return Object.values(values).some((valor) => {
          return String(valor).toLowerCase().includes(value.toLowerCase())
        })
      })

      setFields(newFields)
    }
  }

  return (
    <div className="">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder=" 🔍 Pesquisar algum EPI..."
        className="min-w-36 flex w-80 rounded-md border border-gray-300 px-4 py-2 focus:border-gray-300 focus:outline-none"
      />
    </div>
  )
}

export default Search
