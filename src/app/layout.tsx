'use client'
import './globals.css'
import { ReactNode } from 'react'
import localFont from '@next/font/local'
import { UserProvider } from '@context/userContext'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { usePathname } from 'next/navigation'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-poppins',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/') {
    return (
      <html lang="pt-br">
        <body className={`${poppins.variable} font-sans`}>
          <UserProvider>
            <Container>
              {children}
            </Container>
          </UserProvider>
        </body>
      </html>
    )
  }

  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} font-sans`}>
        <UserProvider>
          <Container>
            <Sidebar screen="Holerites" />
            {children}
          </Container>
        </UserProvider>
      </body>
    </html>
  )
}
