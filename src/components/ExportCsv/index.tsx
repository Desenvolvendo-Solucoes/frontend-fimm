import React from 'react'
import { Download } from 'react-feather'

const ExportCsv: React.FC = () => {
  return (
    <div className="w-72 ">
      <Download className="absolute top-12 ml-2 flex text-white" />
      <input
        type="button"
        value="     Exportar para CSV"
        className="flex w-3/4 cursor-pointer rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-white focus:border-gray-300 focus:outline-none"
        onClick={() => {
          alert('Teste')
        }}
      />
    </div>
  )
}

export default ExportCsv
