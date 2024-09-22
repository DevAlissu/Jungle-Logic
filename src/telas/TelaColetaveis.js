    import React from 'react';
    import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

    export default function TelaColetaveis({ navigation }) {
      return (
        <View style={estilos.container}>
          <Image
            source={require('../../assets/coletaveis.png')} // Coloque a imagem na pasta assets
            style={estilos.imagem}
          />
          <Text style={estilos.titulo}>Vários coletáveis para desbloquear!!</Text>
          <Text style={estilos.subtitulo}>
            Realizando os laboratórios de cada módulo para ganhar moedas e prêmios exclusivos.
          </Text>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => navigation.navigate('TelaPersonagem')}
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
        width: 150,
        height: 150,
        marginBottom: 20,
      },
      titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      subtitulo: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 30,
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
