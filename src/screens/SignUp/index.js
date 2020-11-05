import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';

import { UsuarioContext } from '../../contexts/user';
import LogIn from '../LogIn';

import { Container, Title, Input, Button, ButtonText, Link, Image, TextErro } from './styles';

export default function SignUp() {
    const { signUp } = useContext(UsuarioContext);
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    async function cadastro () {
      try {
        console.log("submit", email, senha);
        await signUp({ email: email, senha: senha });
        Alert.alert('Sucesso!', 'Cadastro realizado com sucesso!', [{
        text: 'ok'}])
        setEmail('');
        setPassword('');
      } catch (error) {
        Alert.alert('Erro!', 'Houve um erro no seu cadastro tente novamente!', [{
          text: 'ok'}])
      }
    }

    return(
        <Container>
            <Title> Cadastro </Title>

            <Input 
                value={nome}
                onChangeText={text => setNome(text)}
                placeholder="Nome"
            />

            <Input 
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="E-mail"
            />
            
            <Input
                value={senha}
                onChangeText={text => setSenha(text)}
                placeholder="Senha"
                secureTextEntry={true}
            />
             <Button
                onPress={() => cadastro()}
            >
                <ButtonText>Cadastrar</ButtonText>
            </Button>
            
            <Link onPress={() => navigation.navigate(LogIn)}>Faça o seu Login</Link>
        </Container>

       
    )
}
