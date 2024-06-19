import React from 'react'

interface ButtonProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  tela: string
  isActive: boolean
  onClick: () => void
}
const Button: React.FC<ButtonProps> = ({
  tela,
  isActive,
  onClick,
  icon: Icon,
}) => {
  return (
    <div
      className={`mt-5 flex items-center border-l-[7px] ${
        isActive ? 'border-primary bg-datagrid-row' : 'border-transparent'
      } p-2 text-center`}
      onClick={onClick}
    >
      <Icon
        className={`h-7 w-7 ${isActive ? 'text-primary' : 'text-gray-500'}`}
      />
      <span className={`ml-2 ${isActive ? 'text-primary' : 'text-gray-500'}`}>
        {tela}
      </span>
    </div>
  )
}

export default Button
