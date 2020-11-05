import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #031126;
  flex:1;
  justify-content:center;
  align-items:center;
  padding: 20px;
`;

export const Input = styled.TextInput`
  color: white;
  width:290px;
  height: 50px;
  border-radius: 30px;
  padding:0 20px;
  margin-top:15px;
  background-color: #071837;
`;

export const Button = styled.TouchableOpacity`
  width:200px;
  height: 50px;
  background-color: brown;
  border-radius:50px;
  justify-content:center;
  align-items:center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color:white;
  font-size:18px;
`;

export const Link = styled.Text`
  margin-top: 100px;
  color:white;
`;