'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Logo from '@/components/Logo'
import Button from '@/components/Sidebar/Button'
import React, { useState } from 'react'
import { User } from 'react-feather'
import { FiLogOut } from 'react-icons/fi'
import { BsFileEarmarkText } from 'react-icons/bs'
import AvatarIcon from '../Avatar'
import Logout from '@/components/Logout'

interface SidebarProps {
  screen: string
}

const Sidebar: React.FC<SidebarProps> = ({ screen }) => {
  const [activeButton, setActiveButton] = useState(screen)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <NavigationMenu.Root className=" flex h-full w-full flex-col border border-l-gray-400 ">
      <Logo />
      <NavigationMenu.List>
        {/* <NavigationMenu.Item>
          <NavigationMenu.Link href="/solicitacoes">
            <Button
              icon={BsClipboard2}
              tela="Solicitações EPI"
              isActive={activeButton === 'Solicitações'}
              onClick={() => setActiveButton('Solicitações')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}

        {/* <NavigationMenu.Item>
          <NavigationMenu.Link href="/solicitacoesEquip">
            <Button
              icon={BsPhone}
              tela="Solicitações EQUIP"
              isActive={activeButton === 'Solicitações Equipamentos'}
              onClick={() => setActiveButton('Solicitações Equipamentos')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/holerites">
            <Button
              icon={BsFileEarmarkText}
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
              tela="Funcionários"
              isActive={activeButton === 'Funcionarios'}
              onClick={() => setActiveButton('Funcionarios')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="cursor-pointer">
            <Button
              icon={FiLogOut}
              tela="Sair"
              isActive={activeButton === 'Sair'}
              onClick={() => setOpen(true)}
            />
            <Logout isOpen={open} setOpen={setOpen} />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* <NavigationMenu.Item>
          <NavigationMenu.Link href="epi">
            <Button
              icon={FaMaskFace}
              tela="EPI"
              isActive={activeButton === 'Epi'}
              onClick={() => setActiveButton('Epi')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}

        {/* <NavigationMenu.Item>
          <NavigationMenu.Link href="/equipamentos">
            <Button
              icon={FaPrint}
              tela="Equipamentos"
              isActive={activeButton === 'Equipamentos'}
              onClick={() => setActiveButton('Equipamentos')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}
      </NavigationMenu.List>
      <div className="mb-4 flex h-2/4 w-full items-end justify-center text-center">
        <div className="flex flex-row items-center gap-2">
          <AvatarIcon img={''} nome={'Welber Almeida'} />
          <div className="flex flex-col">
            <label className="text-lg">Welber Almeida</label>
          </div>
        </div>
      </div>
    </NavigationMenu.Root>
  )
}

export default Sidebar
