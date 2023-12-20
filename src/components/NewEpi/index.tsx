'use client'
import React, { useState } from 'react'
import { Plus } from 'react-feather'
import ModalEpi from '../ModalEpi'

const NewEpi = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className=" ">
      <button
        onClick={() => setOpen(!open)}
        className="w-42 min-w-40 flex h-11 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-xs text-white  hover:bg-btn-hover_primary focus:border-gray-300 focus:outline-none"
      >
        <Plus className="mr-2" />
        Novo Epi
      </button>
      <ModalEpi isOpen={open} setOpen={setOpen} />
    </div>
  )
}

export default NewEpi
