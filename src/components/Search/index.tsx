'use client'
import { Data } from '@/types'
import React, { useEffect, useState } from 'react'

interface SearchProps {
  fields: Data[]
  setFields: React.Dispatch<React.SetStateAction<Data[]>>
  loading: boolean
}

const Search: React.FC<SearchProps> = ({ fields, setFields, loading }) => {
  const [query, setQuery] = useState('')
  const [original, setOriginal] = useState<Data[]>([])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setQuery(value)
    if (value === '') {
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

  useEffect(() => {
    setOriginal(fields)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <div className="">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder=" 🔍 Pesquisar "
        className="min-w-36 flex w-80 rounded-md border border-gray-300 px-4 py-2 focus:border-gray-300 focus:outline-none"
      />
    </div>
  )
}

export default Search
