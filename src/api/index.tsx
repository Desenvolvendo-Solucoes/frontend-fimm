import { Data, RequestCreateEpi } from '@/types'
import axios, { AxiosRequestConfig } from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import { toast } from 'react-toastify'

export const ValidaToken = () => {
  return new Promise((resolve, reject) => {
    const token = getCookie('access_token')
    const Token = {
      headers: { Authorization: `Bearer ${token}` },
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    if (token === undefined) reject({ error: 'token undefined' })

    axios
      .get('http://127.0.0.1:3000', Token)
      .then((response) => {
        resolve(true)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const signin = (email: string, senha: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://127.0.0.1:3000/auth/login', null, {
        params: {
          email,
          senha,
        },
      })
      .then((response) => {
        setCookie('access_token', response.data.access_token)
        toast.success('logado com sucesso')
        resolve(true)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast.error('Email ou senha incorreto, favor verificar!')
          reject(err)
        }
      })
  })
}

export const getEpiSolicitados = (): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const Token = tokenHeader()

    axios
      .get('http://127.0.0.1:3000/epi/solicitacoes', Token)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const getEquipSolicitados = (): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const header = tokenHeader()
    axios
      .get('http://127.0.0.1:3000/equip/solicitacoes', header)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const getEpiCadastrado = (): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const Token = tokenHeader()

    axios
      .get('http://127.0.0.1:3000/epi/cadastrados', Token)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const getEquipCadastrado = (): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const headers = tokenHeader()
    axios
      .get('http://127.0.0.1:3000/equip/cadastrados', headers)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const updateStatus = (data: {
  [key: string]: string
}): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const Token = tokenHeader()
    axios
      .post('http://127.0.0.1:3000/epi/update', Token, {
        params: data,
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const createEpi = ({
  dias,
  estoque,
  imagem,
  marca,
  nome,
  tamanhos,
}: RequestCreateEpi): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const header = tokenHeader()
    axios.put('http://127.0.0.1:3000/epi/create', header, {
      params: {
        nome,
        dias,
        estoque,
        tamanhos,
        imagem,
        marca,
      },
    })
  })
}

const tokenHeader = () => {
  const token = getCookie('access_token')
  const Token: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  return Token
}
