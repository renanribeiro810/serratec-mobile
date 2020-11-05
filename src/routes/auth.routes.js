import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const Auth = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Auth.Screen name="LogIn" component={LogIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  )
}
