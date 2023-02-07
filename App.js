import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ContextProvider } from './contextState';
import Home from './src/components/Home';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation';
import  Contactos from './contactos';
import  ConfiguracionContactoEmergencia from './Confnumemergencia';
import about from './about';
import horactualtemperatura from './horactualtemperatura';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home'}}
          />
          <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{title:'Navigation'}}
          />
           <Stack.Screen
          name="ConfiguracionContactoEmergencia"
          component={ConfiguracionContactoEmergencia}
          options={{title:'ConfiguracionContactoEmergencia'}}
          />
          <Stack.Screen
          name="Contactos"
          component={Contactos}
          options={{title:'Contactos'}}
          />
           <Stack.Screen
          name="about"
          component={about}
          options={{title:'about'}}
          />
           <Stack.Screen
          name="horactualtemperatura"
          component={horactualtemperatura}
          options={{title:'horactualtempratura'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
