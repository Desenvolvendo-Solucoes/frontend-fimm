'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Logo from '@/components/Logo'
import Button from '@/components/Sidebar/Button'
import React, { useState } from 'react'
import { Home, User, FileText, Settings, MoreVertical } from 'react-feather'
import AvatarIcon from '../Avatar'
import ModalLogout from '../ModalLogout'

interface SidebarProps {
  screen: string
}

const Sidebar: React.FC<SidebarProps> = ({ screen }) => {
  const [activeButton, setActiveButton] = useState(screen)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <NavigationMenu.Root className=" h-full w-full border border-l-gray-400">
      <Logo />
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/solicitacoes">
            <Button
              icon={Home}
              tela="Solicitações"
              isActive={activeButton === 'Solicitações'}
              onClick={() => setActiveButton('Solicitações')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/holerites">

            <Button
              icon={FileText}
              tela="Holerites"
              isActive={activeButton === 'Holerites'}
              onClick={() => setActiveButton('Holerites')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/funcionarios">
            <Button
              icon={User}
              tela="Funcionarios"
              isActive={activeButton === 'Funcionarios'}
              onClick={() => setActiveButton('Funcionarios')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="configuracoes">
            <Button
              icon={Settings}
              tela="Configurações"
              isActive={activeButton === 'Configurações'}
              onClick={() => setActiveButton('Configurações')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <div className="flex h-2/4 w-full items-end justify-center text-center">
        <div className="flex flex-row">
          <AvatarIcon img={''} nome={'Ricardo Dias'} />
          <div className="flex flex-col">
            <label className="text-lg">Ricardo dias</label>
            <label className="text-xs font-medium text-gray-500">
              Ricardo@cc.com.br
            </label>
          </div>
          <div className="fixed bottom-10 left-72">
            <button onClick={() => setOpen(!open)}>
              <MoreVertical />
            </button>
            <ModalLogout isOpen={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </NavigationMenu.Root>
  )
}

export default Sidebar
