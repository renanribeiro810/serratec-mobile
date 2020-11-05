import React, {Text} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Projetos from '../screens/Projetos';
import Tarefas from '../screens/MinhasTarefas';


const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Projetos"
      tabBarOptions={
        {
          activeTintColor: 'blue',
          inactiveTintColor: '#ccc'
        }
      }>
      <Tab.Screen
        name="Projetos"
        component={Projetos}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="folder"
                color={color}
                size={32} />
            )
          }
        } />

<Tab.Screen
        name="MinhasTarefas"
        component={Tarefas}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="playlist-check"
                color={color}
                size={32} />
            )
          }
        } />
    </Tab.Navigator>
    
  )
}

