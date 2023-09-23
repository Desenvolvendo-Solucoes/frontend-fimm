'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Logo from '@/components/Logo'
import Button from '@/components/Sidebar/Button'
import React, { useState } from 'react'
import { Home, User, FileText, Settings } from 'react-feather'

interface SidebarProps {
  screen: string
}

const Sidebar: React.FC<SidebarProps> = ({ screen }) => {
  const [activeButton, setActiveButton] = useState(screen)

  return (
    <NavigationMenu.Root className=" h-full w-full border border-l-gray-400">
      <Logo />
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="solicitacoes" active={false}>
            <Button
              icon={Home}
              tela="Solicitações"
              isActive={activeButton === 'Solicitações'}
              onClick={() => setActiveButton('Solicitações')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="holerites">
            <Button
              icon={FileText}
              tela="Holerites"
              isActive={activeButton === 'Holerites'}
              onClick={() => setActiveButton('Holerites')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="funcionarios">
            <Button
              icon={User}
              tela="Funcionarios"
              isActive={activeButton === 'Funcionarios'}
              onClick={() => setActiveButton('Funcionarios')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">
            <Button
              icon={Settings}
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
