import React from 'react'
import { Home } from 'react-feather'

interface ButtonProps {
  tela: string
  isActive: boolean
  onClick: () => void
}
const Button: React.FC<ButtonProps> = ({ tela, isActive, onClick }) => {
  return (
    <div
      className={`mt-5 flex items-center border-l-[7px] ${
        isActive ? 'border-primary bg-datagrid-row' : 'border-transparent'
      } p-2 text-center`}
      onClick={onClick}
    >
      <Home
        className={`h-10 w-10 ${isActive ? 'text-primary' : 'text-gray-500'}`}
      />
      <span className={`ml-2 ${isActive ? 'text-primary' : 'text-gray-500'}`}>
        {tela}
      </span>
    </div>
  )
}

export default Button
