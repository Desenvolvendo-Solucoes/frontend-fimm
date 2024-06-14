import React from 'react'
import { FiLogOut, FiAlertCircle } from 'react-icons/fi'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const Logout: React.FC<IModal> = ({ isOpen, setOpen }) => {
  const { push } = useRouter()

  const logout = () => {
    deleteCookie('access_token')
    setOpen(!isOpen)
    push('/')
  }

  if (isOpen) {
    return (
      <div
        // eslint-disable-next-line prettier/prettier
        className={`fixed justify-center items-center bottom-0 left-0 right-0 top-0 flex flex-row-reverse rounded bg-rgba-modal pr-4 pt-4 ${isOpen ? 'h-full md:w-full' : 'invisible h-0 w-0'} `}
      >
        <div
          // eslint-disable-next-line prettier/prettier
          className={`flex  transform flex-col items-center rounded-md bg-white p-3 ${isOpen ? 'h-80 w-[500px]' : 'h-0 md:w-0 '} transition-width duration-300 `}
        >
          <FiAlertCircle size={100} className="mt-5 text-yellow-500" />
          <div className="flex flex-col text-center">
            <h1 className="p-2 text-2xl font-bold">Deseja realmente sair ?</h1>
          </div>

          <div
            // eslint-disable-next-line prettier/prettier
            className={`z-[1] flex relative top-10 w-full flex-row items-center justify-around p-4 ${isOpen ? '' : 'invisible'}`}
          >
            <button
              className="mr-6 flex w-full items-center justify-center rounded-2xl bg-primary p-4 text-white "
              onClick={() => logout()}
            >
              <FiLogOut size={26} className="mr-2" />
              Confirmar
            </button>
            <button
              className="w-full rounded-2xl  border-2 border-primary bg-white p-4 text-primary"
              onClick={() => setOpen(!isOpen)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Logout
