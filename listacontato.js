import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity,FlatList } from 'react-native';


const ListaContato = () => {
    return(
      <View style={styles.container}>
        

        <Text style={styles.bordacabecalho} >Lista de contato</Text>

        <View style={styles.container2}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
      
        
         

      </View>
    )
  }
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container2:{
    container: {
        flex: 1,
        paddingTop: 22,
      },
     
  },
  item: {
    padding: 10,
    fontSize: 28,
    height: 44,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
    right: 85,
  },
  cabecalho: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 150,
    
  },
  icone:{
    marginBottom: 25,
  },
  input: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 10,
    marginBottom: 12,
    marginTop: 15,
  },
  signupButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bordacabecalho:{
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    top: 0,
    display:'flex',
    position:'absolute'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  });
  
  export default ListaContato;