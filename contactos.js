import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Contacts from 'expo-contacts';
import { useEffect } from "react";



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const Contactos = () => {
  const [contactos, setContactos] = useState([]);
  

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers,Contacts.Fields.FirstName,Contacts.Fields.LastName],
        });
  
        if (data.length > 0) {
          const contact = data[0];
          console.log(contact.phoneNumbers);
          setContactos(data);
        }
      }
    })();
  }, []);


  const renderItem= ({ item }) => {

    return (<>
     <Text>{item.name}</Text>
      <Text>{item?.phoneNumbers && item?.phoneNumbers[0] && item?.phoneNumbers[0].number}</Text>
    </>
     
      
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contactos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Contactos;