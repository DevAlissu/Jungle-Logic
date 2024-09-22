import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaBoasVindas({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Bem-vindo ao JgaaaaaleLogic</Text>
      <Text style={estilos.subtitulo}>Jogue, aprenda e explore com incríveis laboratórios.</Text>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('TelaColetaveis')}
      >
        <Text style={estilos.textoBotao}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
});
