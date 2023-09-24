import React, { useState } from 'react'
import { Download, Plus } from 'react-feather'
import ModalFuncionarios from '../ModalFuncionarios'
import ModalEpi from '../ModalEpi'

interface IconButtonProps {
  screen: string
}

const ExportCsv: React.FC<IconButtonProps> = ({ screen }) => {
  const [open, setOpen] = useState<boolean>(false)

  if (screen === 'Funcionarios') {
    return (
      <div className="w-1/5 ">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-11/12 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-white focus:border-gray-300 focus:outline-none"
        >
          <Plus className="mr-2" />
          Adicionar Funcionário
        </button>
        <ModalFuncionarios isOpen={open} setOpen={setOpen} />
      </div>
    )
  }
  if (screen === 'Solicitações') {
    return (
      <div className="w-1/5 ">
        <button className="flex w-11/12 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-white focus:border-gray-300 focus:outline-none">
          <Download className="mr-2" />
          Exportar para CSV
        </button>
      </div>
    )
  }
  return (
    <div className="w-1/5 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-11/12 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2  text-white focus:border-gray-300 focus:outline-none"
      >
        <Plus className="mr-2" />
        Novo Epi
      </button>
      <ModalEpi isOpen={open} setOpen={setOpen} />
    </div>
  )
}

export default ExportCsv
