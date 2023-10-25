import React from 'react'
import { LogOut } from 'react-feather'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

const ModalLogout: React.FC<IModal> = ({ isOpen, setOpen }) => {
  if (isOpen) {
    return (
      <div
        className="fixed bottom-0  rounded-2xl border border-gray-300 bg-white p-3"
        style={{ width: '270px', height: '80px', left: '12%', top: '87%' }}
      >
        <div className="flex flex-col items-center p-2">
          <div className="flex flex-row p-2">
            <button onClick={() => setOpen(!isOpen)} className="absolute w-2/4">
              <LogOut />
              {''}
            </button>
            <label className="ml-8">Saír da conta</label>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalLogout
