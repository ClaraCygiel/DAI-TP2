import * as Contacts from 'expo-contacts';
import React, {  useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfiguracionContactoEmergencia = ({ navigation }) => {
  const [contacts, setContacts] = useState([])
  const [emergencyContact, setEmergencyContact] = useState("")




  useEffect(() => {
    const traerNumSaved = async () => {
        setEmergencyContact(await AsyncStorage.getItem("celu"));
    }
    traerNumSaved();
    console.log("Contacto de emergencia:", emergencyContact)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{marginBottom:'7%'}}>Contacto emergencia</Text>
      <FlatList 
      data={contacts} 
      
      keyExtractor={item => item.id}

      renderItem={({item}) =>{
      return(
      <View style={styles.contactosEstilo}>
        <Text style={{bottom:4}}>Nombre: {item.name}</Text>
        <Text style={{bottom:4}}>Num: {item.phoneNumbers[0].number}</Text>  
        {item.phoneNumbers && item.phoneNumbers[0].number == emergencyContact (
          <>
          <View style={styles.contactoEmergencia}>
          <Text style={{color: "black"}}>CONTACTO DE EMERGENCIA</Text>
            </View></>
          )}: (null)
       {} 
      </View>
      )}
    } 
      
       />
    </SafeAreaView>
  );
}

  
const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    margin:10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#0a0005',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
export default ConfiguracionContactoEmergencia