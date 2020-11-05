import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    flex: 1;
    background-color: #031126;
    align-items: center;
   
`;

export const Title = styled.Text`
    margin-top: 40px;
    font-size: 24px;
    color: #fff;
    margin-bottom: 20%;
    
`;

export const Input = styled.TextInput`
    margin-top: 10px;
    padding: 10px;
    width: 300px;
    height: 40px;
    background-color: #071837;
    color: white;
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    width:200px;
    height: 50px;
    background-color: brown;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    margin-top: 30px;
    color: white;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    color: white;
`;

export const Link = styled.Text`    
    margin-top: 120px;
    font-size: 15px;
    font-weight: 100;
    color: white;
`;

export const TextErro = styled.Text`
    color: rgba(196, 28, 0, .7);
    font-weight: bold;
    font-size: 13;
    margin-top:7px;
`;