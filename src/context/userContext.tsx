'use client'
import { getUserData } from '@/api';
import { UserContextType } from '@/types';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserProp {
  onSetUser?: (user: UserContextType) => void;
  userState?: UserContextType;
  page: "Holerites" | "Funcionarios";
  setPage?: React.Dispatch<React.SetStateAction<"Holerites" | "Funcionarios">>;
}

const userContext = createContext<UserProp>({
  page: "Holerites",
});

export const useUser = () => {
  return useContext(userContext);
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userState, setUserState] = useState<UserContextType>({
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
  });

  const [page, setPage] = useState<"Holerites" | "Funcionarios">("Holerites");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('userState');
      const savedPage = localStorage.getItem('page');

      if (savedUser) {
        setUserState(JSON.parse(savedUser));
      }
      if (savedPage === "Holerites" || savedPage === "Funcionarios") {
        setPage(savedPage);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userState', JSON.stringify(userState));
    }
  }, [userState]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('page', page);
    }
  }, [page]);

  const onSetUser = (user: UserContextType) => {
    setUserState(user);
  }

  const value = {
    onSetUser,
    userState,
    page,
    setPage,
  };

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
}
