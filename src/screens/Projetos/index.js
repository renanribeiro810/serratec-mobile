import React, { useEffect, useState, useContext } from 'react';
import {Image, ScrollView, Text} from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { useNavigation, SafeAreaView } from '@react-navigation/native';
import { UsuarioContext } from '../../contexts/user';

import
 {
    Container,
    FormNovoProjeto,
    Input,
    Button,
    ButtonText,
    ProjetoContainer,
    Projeto,
    ProjetoText,
    ProjetoTitle,
    Link,
    TarefasText,
    TarefasView, 
    EditarInput, 
    LogOutButton
} from './styles';

import { View } from 'react-native';

import api from '../../services/api';


export default function Projetos() {
   
    const [ projetos, setProjetos ] = useState([]);
    const [ novoProjeto, setNovoProjeto ] = useState("");
    const [ tarefas, setTarefas ] = useState([]);
    const [projetoAtualizado, setProjetoAtualizado] = useState("");
    const [projetoSelecionado, setProjetoSelecionado] = useState(0);
    const { signOut, user } = useContext(UsuarioContext)

    async function loadProjetos (){
        try { const response = await api.get('projetos');
        setProjetos(response.data);
        } catch {
            console.warn('erro ao recuperar projetos')
        }

    }
      
    useEffect(()=> {
            loadProjetos();
        },[])

    async function handleAddProjeto (){
        if(!novoProjeto) {
            console.warn("Vazio")
            return;
        }

        const params = {
            descricao: novoProjeto
        };

        try {
            const response = await api.post('projetos', params)
            loadProjetos();
            setNovoProjeto("");
        } catch (error) {
            console.warn(error);
        }

    }


    async function pegarTarefas (projeto) {
        
        try {
            const response = await api.get(`projetos/${projeto}?_embed=tarefas`);
            setTarefas(response.data.tarefas);
        } catch (error) {
            console.log(error);
        } 
    }

    async function removeProjeto(projeto) {
        await api.delete(`projetos/${projeto.id}`);
        loadProjetos();
    }

    async function editarProjeto (id, descricao) {
        try {
            console.log(projetoAtualizado);
            const params = {
                id: id,
                descricao: descricao
            }
        const response = await api.put(`projetos/${id}`, params);    
        loadProjects();
        } catch (error) {
            console.log(error);
        } finally{
        setProjetoAtualizado("");
        }
    }

    return (
       
            <Container> 
                <ScrollView>
                
                <FormNovoProjeto>
                    <Input
                    value={novoProjeto}
                    onChangeText={text => setNovoProjeto(text)}
                    placeholder="Novo projeto"
                    placeholderTextColor="grey"
                    />

                    <Button onPress={() => handleAddProjeto()}>
                    <ButtonText>
                        Criar
                    </ButtonText>
                    </Button>


                </FormNovoProjeto>

                { projetos.map(projeto => (
                    <ProjetoContainer  >
                        <Projeto key={projeto.id}>
                            <ProjetoTitle>
                                {`Projeto ${projeto.id}`}
                            </ProjetoTitle>

                            <ProjetoText>
                                {projeto.descricao}
                            </ProjetoText> 
                        
                            <Link 
                            onPress={()=> {
                                setProjetoSelecionado(projeto.id)
                                setProjetoAtualizado('')
                                pegarTarefas(projeto.id)
                            }}
                            >Detalhes</Link>
                            <MaterialCommunityIcons 
                            name="delete-outline"
                            color="#fff"
                            size={29}
                            onPress={()=> removeProjeto(projeto)}
                            />
                        </Projeto>

                    { 
                    projetoSelecionado == projeto.id &&
                        <>
                        <View style={{flexDirection: 'row'}}>

                        
                            <EditarInput
                            value={projetoAtualizado}
                            onChangeText={text => setProjetoAtualizado(text)}
                            placeholder="Editar descrição"
                            placeholderTextColor="grey"
                            />
                            <Button onPress={() => editarProjeto(projeto.id, projetoAtualizado)}>
                            <ButtonText>
                                Editar
                            </ButtonText>
                            </Button>
                            </View>
                            {tarefas.map(tarefa => ( 
                                        tarefa.projetoId === projeto.id &&
                                
                                <TarefasView style={{flexDirection: 'column'}}>
                                    <Text>{`Id do Usuário: ${tarefa.usuarioId}`} </Text>
                                    <TarefasText>{tarefa.descricao}</TarefasText>
                                    <Text>{tarefa.concluido && <Text>Concluído </Text>}</Text>
                                </TarefasView>
                                
                            ))} 

                        </>

                    }

                </ProjetoContainer>          
                ))}


            
            <Button onPress={() => {
                signOut()
                }}>
            <ButtonText>Deslogar</ButtonText>
            </Button>
               </ScrollView>  
            </Container>
       
    )
}
