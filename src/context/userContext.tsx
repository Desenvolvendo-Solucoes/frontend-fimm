'use client'
import { getUserData } from '@/api';
import { UserContextType } from '@/types';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface UserProp {
  onSetUser?: (user: UserContextType) => void,
  userState?: UserContextType
  page: string
  setPage?: React.Dispatch<React.SetStateAction<"Holerites" | "Funcionarios">>
}

const userContext = createContext<UserProp>({
  page: "Holerites",
});

export const useUser = () => {
  return useContext(userContext);
}

export const UserProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<UserContextType>(() => {
    const savedUser = localStorage.getItem('userState');
    return savedUser ? JSON.parse(savedUser) : {
      nome: null,
      email: null,
      contrato: null,
      rh: null,
      base: null,
      cidade: null,
      cpf: null,
      funcao: null,
      matricula: null,
      regiao: null,
    };
  });

  const [page, setPage] = useState<"Holerites" | "Funcionarios">(() => {
    const savedPage = localStorage.getItem('page');
    return savedPage ? (savedPage as "Holerites" | "Funcionarios") : 'Holerites';
  });

  useEffect(() => {
    localStorage.setItem('userState', JSON.stringify(userState));
  }, [userState]);

  useEffect(() => {
    localStorage.setItem('page', page);
  }, [page]);

  const onSetUser = (user: UserContextType) => {
    setUserState(user);
  }

  const value = {
    onSetUser: onSetUser,
    userState: userState,
    page: page,
    setPage: setPage,
  }

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
}
