
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useState} from 'react';
import axios from 'axios';




const Cadcontato = ({navigation}) => {
    
  
  const [nome,setNome] = useState('')
  const [telefone,setTelefone] = useState('')
  const [email,setEmail] = useState('')
  
  const cadastrarContato = async () => {
    try {
      const response = await axios.post('http://localhost:3000/contatos', {
        nome,
        email,
        telefone,
        
      });

      console.log('Contato cadastrado com sucesso:', response.data);

    } catch (error) {
      console.error('Erro ao cadastrar contato:', error);
    }
  
    

  };
  
  
  return (
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
  
          <TouchableOpacity style={styles.loginButton} onPress={cadastrarContato} >
            <Text style={styles.buttonText}>SALVAR</Text>
          </TouchableOpacity>
  
          
  
    </View>
    );
    };

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
        cabecalho: {
          fontSize: 35,
          fontWeight: 'bold',
          marginBottom: 150,
          
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


export default Cadcontato;