'use client'
import React, { useState } from 'react'
import { Data } from '@/types'
import { XCircle } from 'react-feather'
import Select from 'react-select'
import Loading from '@components/Loading'
import { updateEpiStatus, updateEquipStatus } from '@api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
  id: string,
  row: Data
  refresh: React.Dispatch<React.SetStateAction<number>>
  page: string
}

const EditSolicitacaoes: React.FC<IModal> = ({ isOpen, setOpen, row, id, refresh, page }) => {
  const [value, setValue] = useState<{
    value: string | React.JSX.Element | (string | number)[] | undefined
    label: string | React.JSX.Element | (string | number)[] | undefined
  }>({ value: row.status, label: row.status })
  const [reject, setReject] = useState<string>()
  const [loading, setLoading] = useState(false)

  const [options] = useState<{ value: string, label: string }[]>([
    { value: 'Pendente', label: 'Pendente' },
    { value: 'Separado', label: 'Separado' },
    { value: 'Em Transito', label: 'Em Transito' },
    { value: 'Pendente Envio', label: 'Pendente Envio' },
    { value: 'Entregue', label: 'Entregue' },
    { value: 'Rejeitado', label: 'Rejeitado' },
  ])

  const handleUpdate = () => {
    switch (page) {
      case 'solicitacoes':
        setLoading(true)
        if (row.status != value.value) {
          if (value.value === 'Rejeitado') {
            if (reject === undefined || reject == '') {
              toast.error('Motivo da Rejeição necessário')
              setLoading(false)
            } else {
              updateEpiStatus(id, value.value, reject).then((response) => {
                toast.success('Status Atualizado com sucesso!')
                setLoading(false)
                setOpen(!open)
                refresh(Math.random() * 100)
              })
            }
          } else {
            updateEpiStatus(id, value.value!.toString()).then((response) => {
              toast.success('Status Atualizado com sucesso!')
              setLoading(false)
              setOpen(!open)
              refresh(1 + 1)
            }).catch((err) => {
              setLoading(false)

            })
          }
        } else {
          setOpen(!open)
        }
        break;
      case 'solicitacoesEquip':
        setLoading(true)
        if (row.status != value.value) {
          if (value.value === 'Rejeitado') {
            if (reject === undefined || reject == '') {
              toast.error('Motivo da Rejeição necessário')
              setLoading(false)
            } else {
              updateEquipStatus(id, value.value, reject).then((response) => {
                toast.success('Status Atualizado com sucesso!')
                setLoading(false)
                setOpen(!open)
                refresh(1 + 1)
              })
            }
          } else {
            updateEquipStatus(id, value.value!.toString()).then((response) => {
              toast.success('Status Atualizado com sucesso!')
              setLoading(false)
              setOpen(!open)
              refresh(1 + 1)
            }).catch((err) => {
              setLoading(false)

            })
          }
        } else {
          setOpen(!open)
        }
        break;
    }
  }


  if (isOpen) {
    return (
      <div
        // eslint-disable-next-line prettier/prettier
        className={`fixed bottom-0 justify-center items-center left-0 right-0 top-0 flex flex-row-reverse rounded bg-rgba-modal pr-4 pt-4 ${isOpen ? 'h-full md:w-full' : 'invisible h-0 w-0'} `}
      >
        <div
          // eslint-disable-next-line prettier/prettier
          className={`hide-scrollbar top-3 flex  transform flex-col  rounded-md bg-white p-3 ${isOpen ? 'h-[30.5rem] md:w-[31.25rem]' : 'h-0 md:w-0 '} transition-width duration-300 `}
        >
          <button
            // eslint-disable-next-line prettier/prettier
            className={`absolute flex h-2 flex-row bg-black ${isOpen ? '' : 'invisible'}`}
            onClick={() => setOpen(!isOpen)}
          >
            <XCircle className="fixed" style={{ left: '88%' }} />
          </button>

          <div className="flex flex-col text-left">
            <h2 className="p-2 font-bold">Editar</h2>
            <h2 className="p-2 font-bold">Status</h2>
            <label className="p-2 text-gray-400  ">
              Qual Status da Solicitação
            </label>

            <Select
              placeholder='status'
              value={value}
              options={options}
              onChange={(e) => setValue({ value: e?.value, label: e?.label })}
              menuPlacement='top'
            />

            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Rejeição</h2>
            <label className="p-2 text-gray-400  ">Motivo da Rejeição</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: Foto do Epi diferente do esperado"
              value={reject}
              onChange={(e) => setReject(e.target.value)}
            />
          </div>

          <div
            // eslint-disable-next-line prettier/prettier
            className={`z-[1] flex  w-full flex-row items-center justify-around border-t p-4 ${isOpen ? '' : 'invisible'}`}
            style={{ boxShadow: '0 -20px 20px -20px rgba(0,0,0,0.2)' }}
          >
            <button
              className="mr-6 w-full rounded-2xl h-16  border-2 border-primary bg-white p-4 text-primary"
              onClick={() => setOpen(!isOpen)}
            >
              Cancelar
            </button>
            <button
              className="w-full rounded-2xl h-16 bg-primary p-4 text-white"
              onClick={() => handleUpdate()}
            >
              {loading ? (<Loading />) : ('Salvar')}
            </button>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    )
  }
}

export default EditSolicitacaoes
