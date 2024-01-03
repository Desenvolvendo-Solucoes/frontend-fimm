'use client'
import React, { useState } from 'react'
import { Filter } from 'react-feather'
import ModalFilter from '../ModalFilter'
import ModalFilterEquip from '../ModalFilterEquip'
import ModalFilterFuncionario from '../ModalFilterFuncionario'

interface IconButtonProps {
  screen: string
}

const Filtering: React.FC<IconButtonProps> = ({ screen }) => {
  const [open, setOpen] = useState<boolean>(false)
  switch (screen) {
    case 'solicitacoes':
      return (
        <div className="">
          <button
            onClick={() => setOpen(!open)}
            className=" flex h-11 w-28 cursor-pointer rounded-md border  border-gray-300 px-4 py-2 text-gray-400 hover:border-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <Filter className="mr-1" />
            Filtro
          </button>
          <ModalFilter isOpen={open} setOpen={setOpen} />
        </div>
      )
    case 'solicitacoesEqui':
      return (
        <div className="">
          <button
            onClick={() => setOpen(!open)}
            className=" flex h-11 w-28 cursor-pointer rounded-md border  border-gray-300 px-4 py-2 text-gray-400 hover:border-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <Filter className="mr-1" />
            Filtro
          </button>
          <ModalFilterEquip isOpen={open} setOpen={setOpen} />
        </div>
      )
    case 'funcionarios':
      return (
        <div className="">
          <button
            onClick={() => setOpen(!open)}
            className=" flex h-11 w-28 cursor-pointer rounded-md border  border-gray-300 px-4 py-2 text-gray-400 hover:border-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <Filter className="mr-1" />
            Filtro
          </button>
          <ModalFilterFuncionario isOpen={open} setOpen={setOpen} />
        </div>
      )
    case 'equipamentos':
      return (
        <div className="">
          <button
            onClick={() => setOpen(!open)}
            className=" flex h-11 w-28 cursor-pointer rounded-md border  border-gray-300 px-4 py-2 text-gray-400 hover:border-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <Filter className="mr-1" />
            Filtro
          </button>
          <ModalFilterFuncionario isOpen={open} setOpen={setOpen} />
        </div>
      )
  }
}

export default Filtering
