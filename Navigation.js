import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Navigation = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Configuracion Numero de emergencia"
        onPress={() => navigation.navigate('ConfiguracionContactoEmergencia')
      }
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Contactos"
       onPress={() =>navigation.navigate('Contactos')}

      />
    </View>
    <Separator />
    <View>
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
    <Separator />
    <View>
     
      <View>
        <Button
          title="Clima"
          onPress={() => navigation.navigate('Clima')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Navigation;