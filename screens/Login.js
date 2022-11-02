import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';
import HomeyIcon from '../assets/homey-icon.png'; 


function Login() {
    const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      <View style={styles.Middle}>
          <Image
            roundedTop="lg"
            source={HomeyIcon}
            alt="image"
            size="sm"
          />
        <Text style={styles.LoginText}>Homey</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52 }}
            variant="unstyled"
            placeholder="Phone number or email"
            _light={{
              placeholderTextColor: "#837979",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52 }}
            variant="unstyled"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "#837979",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonLogin}>
        <Button style={styles.buttonDesign}>
            Login
        </Button>
      </View>

      <View style={styles.text2}>
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")} ><Text style={styles.signupText}>Forgot Password?</Text></TouchableOpacity>
      </View>

      <View style={styles.text3}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.signupText}>Create Account</Text></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Login />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6ABA5',
  },
  LoginText: {
    marginTop:30,
    fontSize:40,
    fontWeight:'bold',
    color: "#58382B"
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 160
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  text3:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:20
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5, 
    color: "#837979", 
    backgroundColor: "#FFFFFF", 
    borderRadius: 20, 
    height: 52,
    width: 306
  },
  buttonStyle:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    alignItems: 'center'
  },

  buttonLogin:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    alignItems:'center', 
    marginBottom: 25
  },
  buttonDesign:{
    backgroundColor:'#837979', 
    borderRadius: 10, 
    width: 157,
    height: 42, 
    fontSize: 14, 
  },
});
