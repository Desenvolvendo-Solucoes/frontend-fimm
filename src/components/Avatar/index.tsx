import * as Avatar from '@radix-ui/react-avatar'
import React from 'react'

type AvatarIterface = {
  img: string
  nome: string
}

const AvatarIcon: React.FC<AvatarIterface> = ({ img, nome }) => {
  const obterIniciais = (nomeCompleto: string) => {
    const nomes = nomeCompleto.split(' ') // Divide a string em uma matriz de nomes

    if (nomes.length < 2) {
      // Verifica se há pelo menos um nome e um sobrenome
      console.log('Insira um nome completo válido.')
      return
    }

    const primeiraLetraPrimeiroNome = nomes[0][0] // Obtém a primeira letra do primeiro nome
    const ultimoNome = nomes[nomes.length - 1] // Obtém o último nome
    const primeiraLetraUltimoNome = ultimoNome[0] // Obtém a primeira letra do último nome

    return primeiraLetraPrimeiroNome + primeiraLetraUltimoNome
  }

  return (
    <Avatar.Root className="mr-2 inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-primary align-middle text-white">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={img}
        alt="Avatar"
      />
      <Avatar.Fallback>{obterIniciais(nome)}</Avatar.Fallback>
    </Avatar.Root>
  )
}

export default AvatarIcon
