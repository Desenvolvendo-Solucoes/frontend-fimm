'use client'
import React, { useState } from 'react'
import { Plus } from 'react-feather'
import ModalFuncionarios from '../ModalFuncionarios'

const AddForm = () => {
  const [refresh, setRefresh] = useState(0)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="w-1/5 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-11/12 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-white focus:border-gray-300 focus:outline-none"
      >
        <Plus className="mr-2" />
        Adicionar Funcionário
      </button>
      <ModalFuncionarios isOpen={open} setOpen={setOpen} refresh={setRefresh} />
    </div>
  )
}

export default AddForm
