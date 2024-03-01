import { Data } from '@/types'
import { updateEpiConfig } from '@/api'
import React, { useEffect, useState } from 'react'
import { XCircle } from 'react-feather'
import Select, { MultiValue } from 'react-select'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
  row: Data
  refresh: React.Dispatch<React.SetStateAction<number>>
}

const EditEpi: React.FC<IModal> = ({ isOpen, setOpen, row, refresh }) => {
  const [nome, setNome] = useState(row.epi.toString())
  const [dias, setDias] = useState(row.dias.toString())
  const [marca, setMarca] = useState(row.marca.toString())
  const [estoque, setEstoque] = useState(row.estoque.toString())
  const [imagem, setImagem] = useState(row.imagem.toString())
  const [tamanhos, setTamanhos] = useState<MultiValue<{
    value: string;
    label: string;
  }> | {
    value: string;
    label: string;
  }[]>()
  const [options, setOptions] = useState<
    | { label: string; value: string }[]
    | MultiValue<{
      label: string;
      value: string;
    }>
  >()

  const convertTamanhos = () => {
    let t = row.tamanhos.toString().split(' ')
    let T: { label: string; value: string }[] = []
    t.forEach(_t => {
      T.push({ value: _t, label: _t })
    })
    setOptions(T)
    setTamanhos(T)
  }

  const ajusteTamanhos = (): Promise<{ value: string; label: string }[]> => {
    return new Promise(async (resolve, reject) => {
      let _tamanhos: { value: string; label: string }[] = []
      for (let i = 0; i < tamanhos!.length; i++) {
        _tamanhos.push({ label: tamanhos![i].value, value: tamanhos![i].value })
      }
      resolve(_tamanhos)
    })
  }

  const onSubmit = async () => {
    ajusteTamanhos().then((_tamanhos) => {
      updateEpiConfig(row.id, dias, estoque, imagem, marca, nome, JSON.stringify(_tamanhos)).then(() => {
        refresh(Math.random() * 100)
        setOpen(false)
      }).catch((err) => { })
    })

  }

  useEffect(() => {
    convertTamanhos()
  }, [])

  if (isOpen) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        // eslint-disable-next-line prettier/prettier
        className={`fixed justify-center items-center bottom-0 left-0 right-0 top-0 flex flex-row-reverse rounded bg-rgba-modal pr-4 pt-4 ${isOpen ? 'h-full md:w-full' : 'invisible h-0 w-0'} `}
      >
        <div
          // eslint-disable-next-line prettier/prettier
          className={`hide-scrollbar top-3 flex  transform flex-col  rounded-md bg-white p-3 ${isOpen ? 'h-[38.5rem] md:w-[31.25rem]' : 'h-0 md:w-0 '} transition-width duration-300 `}
        >
          <button
            // eslint-disable-next-line prettier/prettier
            className={`absolute flex h-2 flex-row bg-black ${isOpen ? '' : 'invisible'}`}
            onClick={() => setOpen(!isOpen)}
          >
            <XCircle className="fixed" style={{ left: '88%' }} />
          </button>

          <div className="flex flex-col overflow-hidden overflow-y-scroll text-left">
            <h2 className="p-2 font-bold">Editar</h2>
            <h2 className="p-2 font-bold">EPI</h2>
            <label className="p-2 text-gray-400  ">Editar o nome do Epi</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Camisa ML"
              value={nome.toString()}
              onChange={(e) => setNome(e.target.value)}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Dias</h2>
            <label className="p-2 text-gray-400">
              Editar a quantidade de Dias
            </label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: 21"
              value={dias.toString()}
              onChange={(e) => setDias(e.target.value)}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Marca</h2>
            <label className="p-2 text-gray-400  ">Editar Marca</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: Polo"
              value={marca.toString()}
              onChange={(e) => setMarca(e.target.value)}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Quantidade</h2>
            <label className="p-2 text-gray-400  ">Editar a quantidade</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: 12"
              value={estoque.toString()}
              onChange={(e) => setEstoque(e.target.value)}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Tamanho</h2>
            <label className="p-2 text-gray-400  ">Editar Tamanho</label>
            <Select
              className='mb-4 w-full rounded-md'
              styles={{
                control: (base) => ({
                  ...base,
                  height: 50
                })
              }}
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
                  if (!options?.find(({ value }) => value === _problemas.value)) {
                    options == undefined ?
                      setOptions([_problemas]) :
                      setOptions([...options!, _problemas]);
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
              options={options}
              isMulti
              required
            />
          </div>
          <div
            // eslint-disable-next-line prettier/prettier
            className={`z-[1] flex  w-full flex-row items-center justify-around border-t p-4 ${isOpen ? '' : 'invisible'}`}
            style={{ boxShadow: '0 -20px 20px -20px rgba(0,0,0,0.2)' }}
          >
            <button
              className="mr-6 w-full rounded-2xl  border-2 border-primary bg-white p-4 text-primary"
              onClick={() => setOpen(!isOpen)}
            >
              Cancelar
            </button>
            <button
              className="w-full rounded-2xl bg-primary p-4 text-white"
              type='submit'
            // onClick={() => setOpen(!isOpen)}
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default EditEpi
