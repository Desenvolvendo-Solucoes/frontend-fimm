import React from 'react'
import { Download } from 'react-feather'

interface IconButtonProps {
  screen: string
}

const ExportCsv: React.FC<IconButtonProps> = ({ screen }) => {
  return (
    <div className="">
      <button className="w-42 min-w-40 flex h-11 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-btn-primary px-4 py-2 text-xs text-white  hover:bg-btn-hover_primary focus:border-gray-300 focus:outline-none">
        <Download className="mr-2" />
        Exportar para CSV
      </button>
    </div>
  )
}

export default ExportCsv
