import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function TelaPersonagem({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image
        source={require('../../assets/personagem.png')} // Coloque a imagem do personagem na pasta assets
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>O grande ancião. Estou aqui para te ajudar.</Text>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('TelaHome')}
      >
        <Text style={estilos.textoBotao}>Próximo</Text>
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
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
});
