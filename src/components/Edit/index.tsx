'use client'
import React, { useState } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import EditSolicitacaoes from '../EditSolicitacaoes'
import EditFuncionarios from '../EditFuncionarios'
import EditEpi from '../EditEpi'
import EditEquipamento from '../EditEquipamento'

interface IconButtonProps {
  screen: string
}

const Edit: React.FC<IconButtonProps> = ({ screen }) => {
  const [open, setOpen] = useState<boolean>(false)
  switch (screen) {
    case 'solicitacoes':
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditSolicitacaoes isOpen={open} setOpen={setOpen} />
        </div>
      )
    case 'funcionarios':
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditFuncionarios isOpen={open} setOpen={setOpen} />
        </div>
      )
    case 'epi':
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditEpi isOpen={open} setOpen={setOpen} />
        </div>
      )
    case 'equipamento':
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditEquipamento isOpen={open} setOpen={setOpen} />
        </div>
      )
  }
}

export default Edit
