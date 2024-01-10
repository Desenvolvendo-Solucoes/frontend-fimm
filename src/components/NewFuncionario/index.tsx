'use client'
import React, { useState } from 'react'
import { Plus } from 'react-feather'
import ModalFuncionarios from '../ModalFuncionarios'

const NewFuncionario = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="w-1/5 ">
      <button
        onClick={() => setOpen(!open)}
        className="w-42 min-w-40 flex h-11 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-xs  text-white focus:border-gray-300 focus:outline-none"
      >
        <Plus className="mr-2" />
        Novo Colaborador
      </button>
      <ModalFuncionarios isOpen={open} setOpen={setOpen} />
    </div>
  )
}

export default NewFuncionario
