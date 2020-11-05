import React,{ useState, useEffect, useMemo, useCallback, useContext} from 'react';
import { Alert, Button, ScrollView, ActivityIndicator, Text, ButtonText} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
//import  { Picker } from '@react-native-community/picker';
import ProgressCircle from 'react-native-progress-circle';




import { UsuarioContext } from '../../contexts/user';

import api from '../../services/api';
//import Tarefa from '../../components/Tarefa';
//import Header from '../../components/Header';

import { Container, Title,
        FormTarefa,
        Input_,
        ContainerConta,
        TextoConta,
        BotaoAdicionar,
        ContainerProjetos,
        TextoProjeto,
        BotaoText }  from './styles';

export default function Tarefas() {
    const [usuario, setUsuario] = useState({});
    const [tarefas, setTarefas] = useState([]);
    const [projetoId, setProjetoId] = useState([]);
    const [load, setLoad] = useState(false);
    const [novaTarefa, setNovaTarefa] = useState("");
    const { signOut, user } = useContext(UsuarioContext)

    const focoPagina = useIsFocused();
  
    const [percentual, setPercentual] = useState(0);



        async function pegarUsuario() {
            setLoad(true);
            try{
                const user = await AsyncStorage.getItem('@SICCUM:user');
                if(!user) return;
                setUsuario(JSON.parse(user));
                tarefasUsuario(JSON.parse(user));
            } catch(error){
                console.warn(error);
            } finally{
                setLoad(false);
            }
        }


    // async function listaProjetos() {
    //         try {
    //             const response = await api.get('projetos');
    //             setProjetos(response.data);
    //         } catch (error) {
    //             console.warn(error);
    //         }
    //     }

    async function tarefasUsuario() {
            setLoad(true);
            try {
                const response = await api.get(`usuarios/${user.id}?_embed=tarefas`);
                setTarefas(response.data.tarefas);
            } catch (error) {
                console.warn(error);
            } finally{
                setLoad(false);
            }
        }


    async function adicionarTarefa () {
        if(!novaTarefa) {
            return;
        }
        const params = {
            descricao: novaTarefa,
            concluido: false,
            projetoId: projetoId,
            usuarioId: usuario.id
        }

        try {

            const response = await api.post('tarefas', params);
            tarefasUsuario(usuario);
            setNovaTarefa("");
            setProjetoId("")
        } catch (error) {
            console.warn('erro ao adicionar tarefa');
        }
    }

    // const qtdConcluidas = useMemo(
    //     () => {
    //         const concluidas = tarefas.filter(tarefa => {
    //             return tarefa.concluido === true;
    //         })

    //         return concluidas.length;
    //     }, [tarefas],
    //  )

    //  const qtdTarefas = useMemo(() => tarefas.length, [tarefas]);

    //  const pendentes = useMemo(() => tarefas.length - qtdConcluidas);

    // useEffect(
    //     () => {
    //         pegarUsuario();
    //         TodosUsuarios();
    //         listaProjetos();
    //     }, [pegarUsuario, emFoco], 
    // )

   useEffect(() => {
      if (focoPagina) {
        percentualTarefasRealizadas();
        pegarUsuario();
      }
  
    }, [focoPagina])


  
    const percentualTarefasRealizadas = async () => {
      const tarefas_realizadas = tarefas.filter(tarefa => tarefa.concluido)
      const calculo_percentual = (tarefas_realizadas.length / tarefas.length) * 100
      setPercentual(calculo_percentual)
    }
  
    // Implementação Marcela
    // if (focoPagina) {
    //   percentualTarefasRealizadas();
    // }
  
    // useFocusEffect(percentualTarefasRealizadas())
  
 
  

    return(
        <>          
               <Container>
            <FormTarefa>
            <Input_ 
                     value={novaTarefa} 
                     onChangeText={(novaTarefa) => setNovaTarefa(novaTarefa)}      
                     placeholder="Nova tarefa"      
                 />
                  <Input_ 
                     value={projetoId} 
                     onChangeText={(projetoId) => setProjetoId(parseInt(projetoId))}      
                     placeholder="Id do Projeto"      
                 />
                <BotaoAdicionar onPress={adicionarTarefa} >
                     <BotaoText>
                         Adicionar
                     </BotaoText>
                 </BotaoAdicionar>
             </FormTarefa>

              <ScrollView>
            {
                tarefas.map(tarefa => {
                    return(
                        <Text>
                 
                        <Text>{tarefa.id}</Text>
                        <Text>{tarefa.descricao}</Text>
                        <Text>{tarefa.projetoId}</Text>
                        <Text>{tarefa.usuarioId}</Text>
               
                      </Text>
                    )
                })
            } 
            </ScrollView> 
           
         
        </Container>

        <Container>
        <Title>{user.nome}</Title>
        <Title>{user.email}</Title>
        <ProgressCircle
          percent={percentual}
          radius={100}
          borderWidth={30}
          color="tomato"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 25 }}>{`${percentual.toFixed(2)}%`}</Text>
        </ProgressCircle>
        
       
      </Container>
        </>
    )
}
