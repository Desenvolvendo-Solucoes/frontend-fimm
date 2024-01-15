import React, { useState } from 'react'
import { UploadCloud, XCircle } from 'react-feather'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalEpi: React.FC<IModal> = ({ isOpen, setOpen }) => {
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('')
  const [dias, setDias] = useState('')
  const [estoque, setEstoque] = useState('')
  const [tamanhos, setTamanhos] = useState('')
  const [imagem, setImagem] = useState('')

  if (isOpen) {
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-rgba-modal">
        <div
          className="fixed left-3/4 top-3 transform rounded-md bg-white p-3"
          style={{ width: '400px', left: '45%', top: '10%' }}
        >
          <button
            className="flex h-2 flex-row bg-black"
            onClick={() => setOpen(!isOpen)}
          >
            <XCircle className="fixed" style={{ left: '90%' }} />
          </button>
          <h2 className="p-2 font-bold">Adicionar EPI</h2>
          <label className="mb-2 p-2 text-sm text-gray-400">
            Adicione seu EPI de forma prática
          </label>
          <input
            className=" mb-4 mt-1 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Nome"
            required={true}
            value={nome}
            onChange={(e) => {
              setNome(e.target.value)
            }}
          />

          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Marca do EPI"
            required={true}
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value)
            }}
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="number"
            placeholder="Dias parar expirar"
            required={true}
            value={dias}
            onChange={(e) => {
              setDias(e.target.value)
            }}
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Tamanho"
            required={true}
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="text"
            placeholder="Estoque"
            required={true}
            value={estoque}
            onChange={(e) => {
              setEstoque(e.target.value)
            }}
          />
          <input
            className="mb-4 w-full cursor-pointer rounded-md border border-gray-300 p-3 text-white file:border-none file:bg-white file:text-white"
            type="file"
            placeholder="Imagem"
            required={true}
            value={imagem}
            onChange={(e) => {
              setImagem(e.target.value)
            }}
          />
          <UploadCloud
            className="fixed text-primary"
            style={{ bottom: '18%', left: '5%' }}
          />
          <label className="fixed " style={{ bottom: '18%', left: '13%' }}>
            Imagem
          </label>
          <button
            className="w-full rounded-md bg-primary p-4 text-white"
            onClick={() => setOpen(!isOpen)}
          >
            Cadastrar EPI
          </button>
        </div>
      </div>
    )
  }
}

export default ModalEpi
