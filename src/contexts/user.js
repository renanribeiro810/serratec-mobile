import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';



const UsuarioContext = createContext({});

function UsuarioProvider ({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const loadData = async () => {
      const user = await AsyncStorage.getItem("@SICCUM:user")

      if (user) {
        setUser(JSON.parse(user))
      }
    }

    loadData();
  }, []);


  const signIn = async (email, senha) => {
    // console.warn('cheguei aqui')
    const response = await api.get('usuarios');


    const user = response.data.find((usuario) => {
      return email === usuario.email && senha === usuario.senha
    })


    if (user !== undefined) {
      setUser(user)
      await AsyncStorage.setItem("@SICCUM:user", JSON.stringify(user));
      //tenho que persistir em um storage / banco de dados embarcado

    } else {
      console.warn("Senha ou Usuário inválidos.")
    }

  }

  const signOut = async () => {
    await AsyncStorage.removeItem("@SICCUM:user");
    setUser(null)
  }

  async function signUp (){

    try{
      console.log(user);
      const response = await api.post('usuarios', {email: email, senha: senha, nome: nome});
      const user = response.data;
      setData({user: user});

      await AsyncStorage.setItem('@SICCUM:user', JSON.stringify(user));

    }catch(error){
        console.log(error);
    }

}


  return (
    <UsuarioContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioContext, UsuarioProvider }