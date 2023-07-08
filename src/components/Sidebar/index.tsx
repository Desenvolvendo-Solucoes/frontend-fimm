'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Logo from '@/components/Logo'
import Button from '@/components/Sidebar/Button'
import React, { useState } from 'react'

const Sidebar: React.FC = () => {
  const [activeButton, setActiveButton] = useState('Solicitações')

  return (
    <NavigationMenu.Root className="h-full w-full border-2 border-l-gray-400">
      <Logo />
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            <Button
              tela="Solicitações"
              isActive={activeButton === 'Solicitações'}
              onClick={() => setActiveButton('Solicitações')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            <Button
              tela="Holerites"
              isActive={activeButton === 'Holerites'}
              onClick={() => setActiveButton('Holerites')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            <Button
              tela="Funcionarios"
              isActive={activeButton === 'Funcionarios'}
              onClick={() => setActiveButton('Funcionarios')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            <Button
              tela="Configurações"
              isActive={activeButton === 'Configurações'}
              onClick={() => setActiveButton('Configurações')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Sidebar
