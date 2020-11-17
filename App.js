import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {crea} from '@react-navigation/stack'

    const Stack = createStackNavigator()

import Usuarios from './pantallas/Usuarios'
import Detalles from './pantallas/Detalles'
import CrearUsuarios from './pantallas/CrearUsuarios'

function myStack() {
  return(
    <Stack.Navigatior>
      <Stack.Screen name="Usuarios" component={Usuarios} />
      <Stack.Screen name="Detalles" component={Detalles} />
      <Stack.Screen name="CrearUsuarios" component={CrearUsuarios} />
    </Stack.Navigatior>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
