import React, { useEffect, useState } from 'react'
import { UploadCloud, XCircle } from 'react-feather'
import Select, { MultiValue } from 'react-select'
import Input from 'react-select/dist/declarations/src/components/Input'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalEpi: React.FC<IModal> = ({ isOpen, setOpen }) => {
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('')
  const [dias, setDias] = useState('')
  const [estoque, setEstoque] = useState('')
  const [tamanhos, setTamanhos] = useState<MultiValue<{ value: string, label: string }> | { value: string, label: string }[]>([])
  const [imagem, setImagem] = useState('')
  const [addProblemas, setAddProblemas] = useState<
    | { label: string; value: string }[]
    | MultiValue<{
      label: string;
      value: string;
    }>
  >()

  const onSubmit = () => {
    console.log(tamanhos)
  }


  useEffect(() => { }, [addProblemas])

  if (isOpen) {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}>
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
              placeholder="Estoque"
              required={true}
              value={estoque}
              onChange={(e) => {
                setEstoque(e.target.value)
              }}
            />
            <Select
              className='mb-4 w-full rounded-md'
              placeholder="Tamanhos"
              value={tamanhos}
              onChange={(e: MultiValue<{ value: string, label: string }> | { value: string, label: string }[]) => setTamanhos(e)}
              noOptionsMessage={({ inputValue }) => {
                const _addProblemas = (_inputValue: string) => {
                  let _problemas: {
                    value: string,
                    label: string,
                  } =
                  {
                    value: _inputValue,
                    label: _inputValue,
                  }
                  if (!addProblemas?.find(({ value }) => value === _problemas.value)) {
                    addProblemas == undefined ?
                      setAddProblemas([_problemas]) :
                      setAddProblemas([...addProblemas!, _problemas]);
                  }
                }
                if (inputValue == "") {
                  return (
                    'nenhuma opção disponível'
                  )
                } else {
                  return (<a style={{ cursor: 'pointer' }} onClick={() => {
                    _addProblemas(inputValue)
                  }}>{inputValue} - novo</a>)
                }
              }}
              options={addProblemas}
              isMulti
              required
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
              type='submit'
            >
              Cadastrar EPI
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default ModalEpi
