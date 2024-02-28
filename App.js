import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = () => {
  return (
  <View style={styles.container}>
        
        <Icon name="users" size={80} color="#900" style={styles.icone}/>
        
        
        <Text style={styles.title}>Email</Text>
        <TextInput
        style={styles.input}
        
        />
    
        <Text style={styles.title}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} >
          <Text style={styles.buttonText}>CADASTRE-SE</Text>
        </TouchableOpacity>

  </View>
  );
  };

  const Cadastro = () => {
    return(
      <View style={styles.container}>
        
        <Text style={styles.cabecalho}>Cadastro</Text>
      
        <Text style={styles.title}>Nome</Text>
          <TextInput
          style={styles.input}
        
          />

        <Text style={styles.title}>Email</Text>
          <TextInput
          style={styles.input}
        
          />

        <Text style={styles.title}>Senha</Text>
          <TextInput
          style={styles.input}
          secureTextEntry
          />

        <TouchableOpacity style={styles.signupButton} >
          <Text style={styles.buttonText}>CADASTRAR</Text>
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
    backgroundColor: 'green',
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
  
  export default Login;