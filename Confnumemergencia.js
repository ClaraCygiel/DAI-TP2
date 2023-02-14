import { useEffect, useState } from 'react'
import {  StyleSheet, View, Button,TextInput} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"


const ConfiguracionContactoEmergencia = ({ navigation }) => {
  const [number, setNumber] = useState()

  useEffect(()=>{

    (async()=>{
      const item=await AsyncStorage.getItem("Emergencia")
      setNumber(item)
    })();
  },[])
  const onPressFunction = () => {
    AsyncStorage.setItem("Emergencia",number)

  }
  return (
    <View style={styles.container}>
     
     <TextInput placeholder='Emergencia' onChangeText={setNumber} value={number}/>
      <Button title="Guardar" onPress={onPressFunction} />
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
});

export default ConfiguracionContactoEmergencia

