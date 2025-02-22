'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Logo from '@/components/Logo'
import Button from '@/components/Sidebar/Button'
import React, { useEffect, useState } from 'react'
import { FaMaskFace } from 'react-icons/fa6'
import { User } from 'react-feather'
import { FiLogOut } from 'react-icons/fi'
import { BsClipboard2, BsFileEarmarkText } from 'react-icons/bs'
import AvatarIcon from '../Avatar'
import Logout from '@/components/Logout'
import { useUser } from '@/context/userContext'
import { usePathname } from 'next/navigation' // Importe isso para capturar a URL

interface SidebarProps {
  screen: string
}

const Sidebar: React.FC<SidebarProps> = ({ screen }) => {
  const { userState, page, setPage } = useUser()
  const pathname = usePathname() // Obtém a URL atual da página
  const [activeButton] = useState(screen)
  const [open, setOpen] = useState<boolean>(false)
  const [nome, setNome] = useState('')

  const Name = (name: string) => {
    if (!name) return ''
    const nameSplit = name.split(' ')
    if (nameSplit.length === 1) return nameSplit[0] // Handle single-word names
    const _name = nameSplit[0] + ' ' + nameSplit[nameSplit.length - 1]
    return _name
  }

  useEffect(() => {
    if (userState?.nome) {
      setNome(Name(userState.nome.trim()))
    } else {
      setNome('') // Handle case where userState?.nome is null or undefined
    }
  }, [userState])

  useEffect(() => {
    if (!setPage) return
    if (pathname.includes('solicitacoes')) setPage('solicitacoes')
    if (pathname.includes('holerites')) setPage('Holerites')
    if (pathname.includes('funcionarios')) setPage('Funcionarios')
    if (pathname.includes('epi')) setPage('Epi')
  }, [pathname, setPage])

  return (
    <NavigationMenu.Root className=" flex h-full w-full flex-col border border-l-gray-400 ">
      <Logo />
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/solicitacoes">
            <Button
              icon={BsClipboard2}
              tela="Solicitações"
              isActive={page === 'solicitacoes'}
              onClick={() => setPage!('solicitacoes')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

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
              isActive={page === 'Holerites'}
              onClick={() => setPage!('Holerites')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="/funcionarios">
            <Button
              icon={User}
              tela="Funcionários"
              isActive={page === 'Funcionarios'}
              onClick={() => setPage!('Funcionarios')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="epi">
            <Button
              icon={FaMaskFace}
              tela="EPI"
              isActive={page === 'Epi'}
              onClick={() => setPage!('Epi')}
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

        {/*        <NavigationMenu.Item>
          <NavigationMenu.Link href="/equipamentos">
            <Button
              icon={FaPrint}
              tela="Equipamentos"
              isActive={activeButton === 'Equipamentos'}
              onClick={() => setActiveButton('Equipamentos')}
            />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        */}
      </NavigationMenu.List>
      <div className="mb-4 flex h-2/4 w-full items-end justify-center text-center">
        <div className="flex flex-row items-center gap-2">
          <AvatarIcon img={''} nome={nome} />
          <div className="flex flex-col">
            <label className="text-base">{nome}</label>
          </div>
        </div>
      </div>
    </NavigationMenu.Root>
  )
}

export default Sidebar
