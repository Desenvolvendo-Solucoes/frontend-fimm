import React from 'react'
import { XCircle } from 'react-feather'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalFilter: React.FC<IModal> = ({ isOpen, setOpen }) => {
  if (isOpen) {
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-rgba-modal">
        <div
          className="fixed  top-3  transform rounded-md bg-white p-3"
          style={{
            left: '70%',
            width: '500px',
            height: '600px',
            overflow: 'hidden',
            overflowY: 'scroll',
          }}
        >
          <button
            className="flex h-2 flex-row bg-black"
            onClick={() => setOpen(!isOpen)}
          >
            <XCircle className="fixed" style={{ left: '90%' }} />
          </button>
          <h2 className="p-2 font-bold">Filtro</h2>
          <h2 className="p-2 font-bold">Solicitante</h2>
          <label className="p-2 text-gray-400  ">Filtre pelo solicitante</label>

          <input
            className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Matricula"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Matrícula</h2>
          <label className="p-2 text-gray-400  ">Filtre pela matricula</label>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: 123456"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">EPI</h2>
          <label className="p-2 text-gray-400  ">Filtre pelo EPI</label>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: Bota"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Data de expiração</h2>
          <label className="flex p-2 text-gray-400 ">
            Filtre a data de expiração
          </label>
          <div className="flex  items-center ">
            <div className="w-1/2 ">
              <label className="flex-row p-2">De</label>
              <input
                className="mb-2 flex w-4/5 rounded-md border border-gray-300 p-3"
                type="date"
                placeholder="Ex: 07/07/2023"
              />
            </div>
            <div className="w-1/2 ">
              <label className="flex-row p-2">Até</label>
              <input
                className="mb-2 flex w-4/5 rounded-md border border-gray-300 p-3"
                type="date"
                placeholder="Ex: 07/07/2023"
              />
            </div>
          </div>
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Quantidade</h2>
          <label className="p-2 text-gray-400  ">Filtre pela quantidade</label>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: 1"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Tamanho</h2>
          <label className="p-2 text-gray-400  ">Filtre pelo tamanho</label>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: P"
          />
          <hr className="mb-4"></hr>
          <h2 className="p-2 font-bold">Status</h2>
          <label className="p-2 text-gray-400  ">
            Filtre pelo status do EPI
          </label>
          <input
            className="mb-20 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Ex: Aprovado"
          />
          <div
            className=" flex w-full flex-row items-center  justify-around border-t p-4"
            style={{ boxShadow: '0 -20px 20px -20px rgba(0,0,0,0.2)' }}
          >
            <button
              className="mr-6 w-full rounded-2xl  border-2 border-primary bg-white p-4 text-primary"
              onClick={() => setOpen(!isOpen)}
            >
              Limpar filtro
            </button>
            <button
              className="w-full rounded-2xl bg-primary p-4 text-white"
              onClick={() => setOpen(!isOpen)}
            >
              Filtrar
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalFilter
