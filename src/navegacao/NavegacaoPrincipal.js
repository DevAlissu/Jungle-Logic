import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaBoasVindas from '../telas/TelaBoasVindas';
import TelaColetaveis from '../telas/TelaColetaveis';
import TelaPersonagem from '../telas/TelaPersonagem';

const Pilha = createNativeStackNavigator();

export default function NavegacaoPrincipal() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="TelaBoasVindas">
        <Pilha.Screen
          name="TelaBoasVindas"
          component={TelaBoasVindas}
          options={{ headerShown: false }}
        />
        <Pilha.Screen
          name="TelaColetaveis"
          component={TelaColetaveis}
          options={{ headerShown: false }}
        />
        <Pilha.Screen
          name="TelaPersonagem"
          component={TelaPersonagem}
          options={{ headerShown: false }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}
