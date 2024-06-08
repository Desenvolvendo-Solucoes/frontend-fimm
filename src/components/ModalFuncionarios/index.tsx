import { createUser } from '@/api'
import React, { useState } from 'react'
import { XCircle } from 'react-feather'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '@/components/Loading'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
  refresh: React.Dispatch<React.SetStateAction<number>>
}

const ModalFuncionarios: React.FC<IModal> = ({ isOpen, setOpen, refresh }) => {
  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [cpf, setCpf] = useState('')
  const [cidade, setCidade] = useState('')
  const [funcao, setFuncao] = useState('')
  const [regiao, setRegiao] = useState('')
  const [loading, setLoading] = useState(false)

  const clearParametros = () => {
    setMatricula('')
    setNome('')
    setCpf('')
    setCidade('')
    setFuncao('')
    setRegiao('')
  }

  const create = () => {
    setLoading(true)
    createUser({
      cidade,
      cpf,
      funcao,
      matricula,
      nome,
      regiao,
    })
      .then((response) => {
        toast.success('Cadastrado com Sucesso')
        clearParametros()
        refresh(Math.random() * 100)
        setLoading(false)
        setOpen(false)
      })
      .catch((e) => {
        toast.error('Erro ou cadastrar', e)
      })
  }
  const onSubmit = () => {
    // eslint-disable-next-line prefer-regex-literals
    const cpfRegex = new RegExp(/^\d{3}\d{3}\d{3}\d{2}$/)
    // eslint-disable-next-line prefer-regex-literals
    const matriculaRegex = new RegExp(/^[0-9]{6}$/)

    if (!cpfRegex.test(cpf)) {
      toast.error('Informe um cpf valido!')
      return
    }

    if (!matriculaRegex.test(matricula)) {
      toast.error('Informe uma matricula valida!')
      return
    }

    if (!matriculaRegex.test(matricula)) {
      toast.error('Informe uma matricula valida!')
      return
    }

    create()
  }

  if (isOpen) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit()
        }}
      >
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
              className="mb-4 w-full rounded-md border p-3"
              type="text"
              placeholder="Matrícula"
              value={matricula}
              onChange={(e) => {
                const value = e.target.value
                if (/^\d{0,6}$/.test(value)) {
                  setMatricula(value)
                }
              }}
              required
            />
            <input
              className="mb-4 w-full rounded-md border p-3"
              type="text"
              placeholder="Nome"
              pattern="[a-zA-ZÀ-ÿ\s]*"
              value={nome}
              onChange={(e) => {
                const regex = /^[a-zA-ZÀ-ÿ\s]*$/
                if (regex.test(e.target.value)) {
                  setNome(e.target.value)
                }
              }}
              required
            />
            <input
              className="mb-4 w-full rounded-md border p-3"
              type="text"
              placeholder="CPF"
              pattern="[0-9]*"
              maxLength={11}
              value={cpf}
              onChange={(e) => {
                const value = e.target.value
                if (/^\d{0,11}$/.test(value)) {
                  setCpf(value)
                }
              }}
              required
            />
            <input
              className="mb-4 w-full rounded-md border p-3"
              type="text"
              placeholder="Função"
              maxLength={40}
              value={funcao}
              onChange={(e) => setFuncao(e.target.value)}
              required
            />
            <input
              className="mb-4 w-full rounded-md border p-3"
              type="text"
              placeholder="Região"
              pattern="[a-zA-ZÀ-ÿ\s]*"
              maxLength={40}
              value={regiao}
              onChange={(e) => {
                const regex = /^[a-zA-ZÀ-ÿ\s]*$/
                if (regex.test(e.target.value)) {
                  setRegiao(e.target.value)
                }
              }}
              required
            />

            <input
              className="mb-4 w-full rounded-md border p-3"
              type="text"
              placeholder="Cidade"
              pattern="[a-zA-ZÀ-ÿ\s]*"
              maxLength={40}
              value={cidade}
              onChange={(e) => {
                const regex = /^[a-zA-ZÀ-ÿ\s]*$/
                if (regex.test(e.target.value)) {
                  setCidade(e.target.value)
                }
              }}
              required
            />
            {/* <button
              className="w-full rounded-md bg-primary p-4 text-white"
              onClick={() => setOpen(!isOpen)}
            >
              Download Padrão
            </button>
            <div className="relative mb-2 mt-2">
              <input
                className="placeholder-text w-full cursor-pointer rounded-md border border-gray-300 p-3 text-center text-white file:border-none file:bg-white file:text-white"
                type="file"
                placeholder="Cadastro em massa"
                accept=".csv"
              />
              <span className="pointer-events-none absolute left-0 top-0 w-full cursor-pointer p-3 text-center text-primary">
                Cadastro em massa
              </span>
            </div> */}
            <button className="w-full rounded-md bg-primary p-4 text-white">
              {loading ? <Loading /> : 'Cadastrar funcionário'}
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
      </form>
    )
  }
}

export default ModalFuncionarios
