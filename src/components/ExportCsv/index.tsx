import React from 'react'
import { Download, Plus } from 'react-feather'

interface IconButtonProps {
  screen: string
}

const ExportCsv: React.FC<IconButtonProps> = ({ screen }) => {
  if (screen === 'Funcionarios') {
    return (
      <div className="w-1/5 ">
        <button className="flex w-11/12 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-white focus:border-gray-300 focus:outline-none">
          <Plus className="mr-2" />
          Adicionar Funcionário
        </button>
      </div>
    )
  }
  if (screen === 'Configurações') {
    return (
      <div className="w-1/5 ">
        <button className="flex w-11/12 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-white focus:border-gray-300 focus:outline-none">
          <Plus className="mr-2" />
          Novo Epi
        </button>
      </div>
    )
  }
  return (
    <div className="w-1/5 ">
      <button className="flex w-11/12 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-white focus:border-gray-300 focus:outline-none">
        <Download className="mr-2" />
        Exportar para CSV
      </button>
    </div>
  )
}

export default ExportCsv
