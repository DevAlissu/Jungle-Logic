import { StyleSheet } from 'react-native';

const estilosGlobais = StyleSheet.create({
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
    color: '#777',
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 30,
  },
});

export default estilosGlobais;
