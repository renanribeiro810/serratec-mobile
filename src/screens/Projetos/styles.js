import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #0A081D;
   flex: 1;
   padding: 20px;
`;
export const Title = styled.Text`
    font-size: 35px;
    color: #1b87e5;
    text-align: center;
    margin-bottom: 20px;
`;
export const FormNovoProjeto = styled.View`
   flex-direction: row;
   margin-top: 30px;
`;

export const ProjetoTitle = styled.Text`
    color: white;
    width: 80px;
`;


export const Input = styled.TextInput`
    width: 290px;
    height: 40px;
    background-color: #131D36;
    margin-bottom: 15px;
    padding-left: 20px;
    color: white;
    border-radius: 2px;
`;

export const EditarInput = styled.TextInput`
    width: 200px;
    height: 40px;
    background-color: grey;
    margin-bottom: 15px;
    padding-left: 20px;
    color: white;
    justify-content: center;
    align-items: center;
`;


export const Link = styled.Text`
color: white;
`



export const Button = styled.TouchableOpacity`
    width: 80px;
    height: 40px;
    background-color: brown;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
`;
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const ProjetoContainer = styled.View`
    background-color: #131D36;
    justify-content: center;
    align-items: center;

`;
export const Projeto = styled.View`
    background-color: #131D36;
    margin-top: 10px;
    border-radius: 2px;
    padding: 10px 20px;
   
`;
export const ProjetoText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    justify-content: flex-start;
    align-items: flex-start;

`;

export const TarefasView = styled.View`
    background-color: #131D36;
    border-radius: 2px;
    padding: 10px 20px;
    justify-content: space-between;
    flex-direction: row;
`;

export const TarefasText = styled.Text`
    color: white;
`;


export const LogOutButton = styled.Button`

margin-top: 15px;

`;