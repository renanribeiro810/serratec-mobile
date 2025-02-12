import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { UsuarioContext } from '../contexts/user';


export default function Routes() {

  const { user } = useContext(UsuarioContext);
  
  return (
    <NavigationContainer>
      {
         user  ?
         
          <AppRoutes />
           :
          <AuthRoutes />
      }
    </NavigationContainer>
  )
};
