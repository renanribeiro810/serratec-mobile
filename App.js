import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes'

import { UsuarioProvider } from './src/contexts/user'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsuarioProvider>
        <Routes />
      </UsuarioProvider>
    </SafeAreaView>
  );
}