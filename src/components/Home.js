import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function Home() {
  const [error, setError] = useState(false)
  const [obj, setObj] = useState({
    email: "challenge@alkemy.org",
    password: "react",
  });


  const handleEmail = (email) => {
    setObj({ ...obj, email: email })
  }
  const handlePassword = (password) => {
    setObj({ ...obj, password: password })
  }
  const onPressFunction = () => {

    const client = axios.create({ baseURL: 'http://challenge-react.alkemy.org/' })
    client.post('', obj)
      .then(response => { console.log(response.data); setError(false) }).catch(error => {
        console.log(error)
        setError(true)

      })


    // guardar el token en el context state

    
  
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' onChangeText={handleEmail} value={obj.email} />
      {error && <Text style={styles.textred}>Ingrese un mail por favor</Text>}
      <TextInput placeholder='Password' onChangeText={handlePassword} value={obj.password} />
      {error && <Text style={styles.textred}>Debe ingresar una contraseña</Text>}
      <Button title="enviar" onPress={onPressFunction} />
    </View>
  );
}

//El boton enviar me tiene que llevar a otra pagina donde esten los botones de las 3 funcionalidades y el del codigo qr



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textred: {
    color: "red",
  }

  

});
