// import { Checkbox } from '@material-tailwind/react'


export default function Home() {
  return (
    <>
      <div className="bg-shape absolute -z-10 flex h-screen w-screen items-center justify-center"></div>
      <div className="z-10 flex h-screen w-screen items-center justify-center ">
        <div className="flex w-2/6 flex-col rounded-lg bg-white p-12 shadow-lg">
          <span className="text-zinc-400">Bem vindo de novo! 👋</span>
          <strong className="text-3xl mt-2 ">Acesse sua conta</strong>
          
          <input
            type="email"
            placeholder="Matricula"
            className="h-12 rounded border-2 border-black/20 pl-4 mt-5"
          />
          <input
            type="password"
            placeholder="Senha"
            className="h-12 rounded border-2 border-black/20 pl-4 mt-7"
          />

          <div className="flex flex-row gap-2 items-center mt-6">
            <input type="checkbox" className="form-checkbox h-4 w-4"  />
            <label className="text-base font-semibold text-zinc-700">Mantenha me conectado</label>
          </div>

          <button className="bg-blue-950 text-white font-bold rounded h-11 hover:bg-blue-900 mt-6">ENTRAR</button>

          <a href="" className="text-blue-900 font-bold flex justify-center mt-5" >Esqueci minha senha</a>
          <span className="text-zinc-400">Versão 1.0.0</span>
        </div>
      </div>
    </>
  )
}
