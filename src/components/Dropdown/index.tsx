import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface DropdownProps {
  options: string[]
  setSelectedOption: (option: string) => void // Função para atualizar a opção selecionada
  page: string
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  setSelectedOption,
  page,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOptionState] = useState<string | null>(null) // Estado local para armazenar a opção selecionada

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option) // Chama a função recebida para atualizar a opção selecionada no componente pai
    setSelectedOptionState(option) // Atualiza o estado local com a opção selecionada
    setIsOpen(false) // Fecha o dropdown após selecionar uma opção
  }
  if (page === 'holerite') {
    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-64 justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            onClick={toggleDropdown}
          >
            {selectedOption ? `${selectedOption}` : 'Selecione o contrato'}
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className="relative inline-block h-12 w-full text-left">
        <div>
          <button
            type="button"
            className=" inline-flex h-12 w-full items-center justify-between rounded-lg  px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 "
            onClick={toggleDropdown}
          >
            {selectedOption ? `${selectedOption}` : 'Selecione o contrato'}
            <FiChevronDown size={25} />
          </button>
        </div>

        {isOpen && (
          <div className=" absolute mt-2  w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:border-2 focus:border-black">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Dropdown
