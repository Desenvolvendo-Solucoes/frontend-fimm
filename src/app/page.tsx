'use client'
// import { Checkbox } from '@material-tailwind/react'
import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ValidaToken, signin } from '@/api'
import Loading from '@/components/Loading'

export default function Home() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    ValidaToken()
      .then(() => {
        toast.success('Usuario Logado')
        push('/solicitacoes')
      })
      .catch(() => {
        // toast.error('Sessão Expirada')
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className="bg-shape absolute -z-10 flex h-screen w-screen items-center justify-center"></div>
      <div className="z-10 flex h-screen w-screen items-center justify-center ">
        <div className="flex w-2/6 flex-col rounded-lg bg-white p-12 shadow-lg">
          <span className="text-zinc-400">Bem vindo de novo! 👋</span>
          <strong className="mt-2 text-3xl ">Acesse sua conta</strong>

          <input
            type="email"
            placeholder="Matricula"
            className="mt-5 h-12 rounded border-2 border-black/20 pl-4"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            className="mt-7 h-12 rounded border-2 border-black/20 pl-4"
            onChange={(e) => {
              setSenha(e.target.value)
            }}
          />

          <div className="mt-6 flex flex-row items-center gap-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <label className="text-base font-semibold text-zinc-700">
              Mantenha me conectado
            </label>
          </div>

          <button
            className="mt-6 h-11 rounded bg-btn-primary font-bold text-white hover:bg-btn-secondary"
            onClick={() => {
              setLoading(true)
              signin(email, senha)
                .then(() => {
                  push('/solicitacoes')
                })
                .catch(() => {
                  setLoading(false)
                })
            }}
          >
            {loading ? <Loading /> : 'ENTRAR'}
          </button>

          <a
            href=""
            className="mt-5 flex justify-center font-bold text-blue-900"
          >
            Esqueci minha senha
          </a>
          <span className="text-zinc-400">Versão 1.0.0</span>
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
    </>
  )
}
