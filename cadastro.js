import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import axios from 'axios';


const Cadastro = ({navigation}) => {

    const [nome,setNome] = useState('')
    const [cpf,setCpf] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')


    const cadastrarUsuario = async () => {
      try {
        const response = await axios.post('http://localhost:3000/usuarios', {
          nome,
          email,
          senha,
          cpf
        });
  
        console.log('Usuário cadastrado com sucesso:', response.data);
        // Você pode realizar outras ações após o cadastro, se necessário
  
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
    
      

    };

    return(
      <View style={styles.container}>
        
        <Text style={styles.cabecalho} onPress={()=>navigation.navigate('Home')} >Usuário</Text>
      
        <Text style={styles.title}>Nome</Text>
          <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          />

        <Text style={styles.title}>CPF</Text>
          <TextInput
          style={styles.input}
          onChangeText={setCpf}
          value={cpf}
          />


        <Text style={styles.title}>Email</Text>
          <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          />

        <Text style={styles.title}>Senha</Text>
          <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={setSenha}
          value={senha}
          />

        <TouchableOpacity style={styles.signupButton} onPress={cadastrarUsuario}>
          <Text style={styles.buttonText}>SALVAR</Text>
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  });
  
  export default Cadastro;