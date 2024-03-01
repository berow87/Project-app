import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Cadastro from './cadastro';
import ListaContato from './listacontato';



const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={Login} />
<Stack.Screen name="Cadastrar" component={Cadastro} />
<Stack.Screen name="Listar" component={ListaContato} />

</Stack.Navigator>
</NavigationContainer>
);
}

export default App;



  