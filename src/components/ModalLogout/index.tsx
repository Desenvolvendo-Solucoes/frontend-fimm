import React from 'react'
import { LogOut } from 'react-feather'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalLogout: React.FC<IModal> = ({ isOpen, setOpen }) => {
  const { push } = useRouter()
  if (isOpen) {
    const Logout = () => {
      deleteCookie('access_token')
      push('/')
    }

    return (
      <div
        className="fixed bottom-10 left-[15%] h-20 w-64 rounded-2xl border border-gray-300 bg-white p-3"
        style={{}}
      >
        <div className="flex flex-col items-center p-2">
          <div className="flex flex-row p-2">
            <button onClick={Logout} className="absolute w-2/4">
              <LogOut />
            </button>
            <label className="ml-8">Sair da conta</label>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalLogout
