import { updateFuncionario } from '@/api'
import { Data } from '@/types'
import React, { useState } from 'react'
import { XCircle } from 'react-feather'
import Loading from '../Loading'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
  row: Data
  refresh: React.Dispatch<React.SetStateAction<number>>
}

const EditFuncionarios: React.FC<IModal> = ({
  isOpen,
  setOpen,
  row,
  refresh,
}) => {
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState(row.nome.toString())
  const [cpf, setCpf] = useState(row.cpf.toString())
  const [funcao, setFuncao] = useState(row.funcao.toString())
  const [regiao, setRegiao] = useState(row.regiao.toString())
  const [cidade, setCidade] = useState(row.cidade.toString())

  const isValidCPF = (cpf: string) => {
    let soma = 0
    let resto

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i)
    }
    resto = (soma * 10) % 11

    if (resto === 10 || resto === 11) {
      resto = 0
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false
    }

    soma = 0
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i)
    }
    resto = (soma * 10) % 11

    if (resto === 10 || resto === 11) {
      resto = 0
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false
    }

    return true
  }

  const handleUpdate = () => {
    setLoading(true)
    if (
      nome === '' ||
      cpf === '' ||
      funcao === '' ||
      regiao === '' ||
      cidade === ''
    ) {
      toast.error('Por favor, preencha todos os campos!')
      setLoading(false)
      return
    }
    // eslint-disable-next-line prefer-regex-literals
    const cpfRegex = new RegExp(/^\d{3}\d{3}\d{3}\d{2}$/)
    // eslint-disable-next-line prefer-regex-literals

    if (!cpfRegex.test(cpf)) {
      setLoading(false)
      toast.error('Informe um cpf valido!')
      return
    }
    if (/^(\d)\1+$/.test(cpf)) {
      setLoading(false)
      toast.error('Informe um cpf valido!')
      return
    }
    if (isValidCPF(cpf) === false) {
      setLoading(false)
      toast.error('Informe um cpf valido!')
      return
    }

    const dataToUpdate: {
      nome: string
      cpf: string
      funcao: string
      regiao: string
      cidade: string
      id: string
    } = {
      nome,
      cpf,
      funcao,
      regiao,
      cidade,
      id: row.id,
    }

    updateFuncionario(dataToUpdate)
      .then((response) => {
        toast.success('Dados atualizados com sucesso!')
        refresh(Math.random() * 100)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  if (isOpen) {
    return (
      <div
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
            <h2 className="p-2 font-bold">Nome</h2>
            <label className="p-2 text-gray-400  ">
              Editar o nome do colaborador
            </label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Nome"
              pattern="[a-zA-ZÀ-ÿ\s]*"
              maxLength={60}
              value={nome.toString()}
              onChange={(e) => {
                const regex = /^[a-zA-ZÀ-ÿ\s]*$/
                if (regex.test(e.target.value)) {
                  setNome(e.target.value)
                }
              }}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">CPF</h2>
            <label className="p-2 text-gray-400  ">Editar o CPF</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: 12345678901"
              pattern="[0-9]*"
              maxLength={11}
              value={cpf.toString()}
              onChange={(e) => {
                const value = e.target.value
                if (/^\d{0,11}$/.test(value)) {
                  setCpf(value)
                }
              }}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Função</h2>
            <label className="p-2 text-gray-400  ">Editar Função</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: Agente Comercial"
              maxLength={40}
              value={funcao.toString()}
              onChange={(e) => setFuncao(e.target.value)}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Região</h2>
            <label className="p-2 text-gray-400  ">Editar Região</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              placeholder="Ex: Piruibe"
              pattern="[a-zA-ZÀ-ÿ\s]*"
              maxLength={40}
              value={regiao.toString()}
              onChange={(e) => {
                const regex = /^[a-zA-ZÀ-ÿ\s]*$/
                if (regex.test(e.target.value)) {
                  setRegiao(e.target.value)
                }
              }}
            />
            <hr className="mb-4"></hr>
            <h2 className="p-2 font-bold">Cidade</h2>
            <label className="p-2 text-gray-400  ">Editar Cidade</label>

            <input
              className="mb-4 mt-4 w-full rounded-md border border-gray-300 p-3"
              type="text"
              pattern="[a-zA-ZÀ-ÿ\s]*"
              maxLength={40}
              placeholder="Ex: São Paulo"
              value={cidade.toString()}
              onChange={(e) => {
                const regex = /^[a-zA-ZÀ-ÿ\s]*$/
                if (regex.test(e.target.value)) {
                  setCidade(e.target.value)
                }
              }}
            />
          </div>

          <div
            // eslint-disable-next-line prettier/prettier
            className={`z-[1] flex  w-full flex-row items -center justify-around border-t p-4 ${isOpen ? '' : 'invisible'}`}
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
              onClick={() => handleUpdate()}
            >
              {loading ? <Loading /> : 'Salvar'}
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

export default EditFuncionarios
