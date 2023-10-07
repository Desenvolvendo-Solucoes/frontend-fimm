import React, { useState } from 'react'
import { Filter, Download } from 'react-feather'
import ModalFilter from '../ModalFilter'

interface IconButtonProps {
  screen: string
}

const Filtering: React.FC<IconButtonProps> = ({ screen }) => {
  const [open, setOpen] = useState<boolean>(false)

  if (screen === 'Funcionarios') {
    return (
      <div className=" w-1/5 ">
        <button className="flex w-11/12 cursor-pointer rounded-md border border-btn-primary  px-4 py-2 text-btn-primary focus:border-gray-300 focus:outline-none">
          <Download className="mr-1" />
          Download Padrão
        </button>
      </div>
    )
  }
  return (
    <div className=" w-1/5 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-11/12 cursor-pointer rounded-md border border-gray-300  px-4 py-2 text-gray-300 focus:border-gray-300 focus:outline-none"
      >
        <Filter className="mr-1" />
        Filtro
      </button>
      <ModalFilter isOpen={open} setOpen={setOpen} />
    </div>
  )
}

export default Filtering
