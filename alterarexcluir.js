import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import React,{useState} from 'react';


const Alterar = ({navigation}) => {
    
  
  const [nome,setNome] = useState('')
  const [telefone,setTelefone] = useState('')
  const [email,setEmail] = useState('')
  



  const alterarContato = async () => {
    try {
      const response = await axios.put('http://localhost:3000/contatos'+getid, {
        nome,
        email,
        telefone
        
      });

      console.log('contato alterado com sucesso:', response.data);

    } catch (error) {
      console.error('Erro ao alterar contato:', error);
    };

  


    const deletarContato = async () => {
      try {
        const response = await axios.delete('http://localhost:3000/contatos'+getid, {
          nome,
          email,
          telefone
          
        });
  
        console.log('contato Deletado:', response.data);
  
      } catch (error) {
        console.error('Erro ao deletar contato:', error);
      };

    
  
    }

  }
    

    
  
  return(
      <View style={styles.container}>
        
        <Text style={styles.bordacabecalho} onPress={()=>navigation.navigate('Listar')}>contato</Text>
      
        <Text style={styles.title}>Nome</Text>
          <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          />


        <Text style={styles.title}>Email</Text>
          <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          />


        <Text style={styles.title}>Telefone</Text>
          <TextInput
          style={styles.input}
          onChangeText={setTelefone}
          value={telefone}
          />


        <TouchableOpacity style={styles.loginButton} onPress={alterarContato} >
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>


        

        <TouchableOpacity style={styles.signupButton} onPress={deletarContato} >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>

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
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
    right: 85,
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
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 10,
    marginBottom: 12,
    marginTop: 15,
  },
  signupButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  });
  
  export default Alterar;