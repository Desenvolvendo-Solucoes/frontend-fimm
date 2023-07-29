import React from 'react'
import { Filter } from 'react-feather'

const Filtering: React.FC = () => {
  return (
    <div className=" w-52 ">
      <Filter className="absolute top-12 ml-2 flex text-gray-300" />
      <input
        type="button"
        value="     Filtro"
        className="flex w-9/12 cursor-pointer rounded-md border border-gray-300  px-4 py-2 text-gray-300 focus:border-gray-300 focus:outline-none"
        onClick={() => {
          alert('Teste')
        }}
      />
    </div>
  )
}

export default Filtering
