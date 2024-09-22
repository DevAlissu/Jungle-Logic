import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoPersonalizado({ titulo, aoPressionar }) {
  return (
    <TouchableOpacity style={estilos.botao} onPress={aoPressionar}>
      <Text style={estilos.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
