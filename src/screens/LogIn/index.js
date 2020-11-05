import React, { useState, useContext } from 'react';

import { ActivityIndicator, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignUp from '../SignUp';


import { Container, Input, Button, ButtonText, Link } from './styles'

import { UsuarioContext } from '../../contexts/user';

export default function LogIn() {

  const navigation = useNavigation();

  const { signIn } = useContext(UsuarioContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit() {
    setCarregando(true)
    try {
      await signIn(email, senha)
    } catch {
      setCarregando(false)
    } finally {
      setCarregando(false)
    }
  }



  return (
     <>
    <Container>
      <Image source={require('../../assets/logo.png')}/>
      <Input
        value={email}
        placeholder="E-mail"
        placeholderTextColor="#FFF"
        onChangeText={text => setEmail(text)}
      />
      <Input
        value={senha}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        onChangeText={text => setSenha(text)}
        secureTextEntry={true} />
      <Button onPress={handleSubmit} disabled={!senha || !email}>

        {carregando ?
          <ActivityIndicator color="#333" />
          :
          <ButtonText>Logar</ButtonText>
        }

      </Button>

      <Link onPress={() => navigation.navigate(SignUp)}>Cadastre-se</Link>

    </Container>
    </>
  )
}
