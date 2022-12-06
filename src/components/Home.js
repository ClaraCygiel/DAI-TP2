import { StyleSheet, Text, View, TextInput,Button} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' />
      <Text style={styles.textred}>Ingrese un mail por favor</Text>
      <TextInput placeholder='Password'/>
      <Text style={styles.textred}>Debe ingresar una contraseña</Text>
      <Button title="enviar"onPress={() => console.log("Enviar")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textred:{
    color:"red",
  }
  
});
