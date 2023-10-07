import React from 'react'
import { XCircle } from 'react-feather'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalFuncionarios: React.FC<IModal> = ({ isOpen, setOpen }) => {
  if (isOpen) {
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-rgba-modal">
        <div
          className="fixed left-3/4 top-3  transform rounded-md bg-white p-3"
          style={{ width: '400px', left: '45%', top: '10%' }}
        >
          <button
            className="flex h-2 flex-row bg-black"
            onClick={() => setOpen(!isOpen)}
          >
            <XCircle className="fixed" style={{ left: '90%' }} />
          </button>
          <h2 className="p-2 font-bold">Cadastrar Funcionário</h2>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Matricula"
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Nome"
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="CPF"
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Função"
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Região"
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Base"
          />
          <button
            className="w-full rounded-md bg-primary p-4 text-white"
            onClick={() => setOpen(!isOpen)}
          >
            Cadastrar funcionário
          </button>
        </div>
      </div>
    )
  }
}

export default ModalFuncionarios
