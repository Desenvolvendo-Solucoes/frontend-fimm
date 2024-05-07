'use client'
import React, { useState } from 'react'
import { BsPencilFill } from 'react-icons/bs'
import EditSolicitacaoes from '../EditSolicitacaoes'
import EditFuncionarios from '../EditFuncionarios'
import EditEpi from '../EditEpi'
import EditEquipamento from '../EditEquipamento'
import { Data, ScreeOptions } from '@/types'

interface IconButtonProps {
  screen: ScreeOptions
  id: string
  row: Data
  rowEdit?: React.Dispatch<React.SetStateAction<boolean>>
  refresh: React.Dispatch<React.SetStateAction<number>>
}

const Edit: React.FC<IconButtonProps> = ({ screen, id, row, rowEdit, refresh }) => {
  const [open, setOpen] = useState<boolean>(false)
  switch (screen) {
    case 'solicitacoes':
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditSolicitacaoes page={screen} isOpen={open} setOpen={setOpen} id={id} row={row} refresh={refresh} />
        </div>
      )

    case 'solicitacoesEquip':
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditSolicitacaoes page={screen} isOpen={open} setOpen={setOpen} id={id} row={row} refresh={refresh} />
        </div>
      )
    case 'funcionarios':
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditFuncionarios isOpen={open} setOpen={setOpen} row={row} refresh={refresh} />
        </div>
      )
    case 'epi':
      if (rowEdit) rowEdit(true)
      return (
        <div className=" ">
          <button onClick={() => setOpen(!open)}>
            <BsPencilFill />
          </button>
          <EditEpi isOpen={open} setOpen={setOpen} row={row} refresh={refresh} />
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
