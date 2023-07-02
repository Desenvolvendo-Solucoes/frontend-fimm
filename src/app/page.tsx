// import { Checkbox } from '@material-tailwind/react'

export default function Home() {
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
          />
          <input
            type="password"
            placeholder="Senha"
            className="mt-7 h-12 rounded border-2 border-black/20 pl-4"
          />

          <div className="mt-6 flex flex-row items-center gap-2">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <label className="text-base font-semibold text-zinc-700">
              Mantenha me conectado
            </label>
          </div>

          <button className="mt-6 h-11 rounded bg-blue-950 font-bold text-white hover:bg-blue-900">
            ENTRAR
          </button>

          <a
            href=""
            className="mt-5 flex justify-center font-bold text-blue-900"
          >
            Esqueci minha senha
          </a>
          <span className="text-zinc-400">Versão 1.0.0</span>
        </div>
      </div>
    </>
  )
}
