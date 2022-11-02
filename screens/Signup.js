import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';
import HomeyIcon from '../assets/homey-icon.png'; 


function Signup() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Banner}>
        <Image
            roundedTop="lg"
            source={HomeyIcon}
            alt="image"
            size="sm"
            style={{marginTop: 50, marginBottom: 5}}
        />
        <Text style={styles.BannerText}>Homey</Text>
      </View>

      <View style={styles.Middle}>
        <Text style={styles.CreateText}>Create a Homey Account</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52 }}
            variant="unstyled"
            placeholder="Username"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52 }}
            variant="unstyled"
            placeholder="Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Phone number */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52 }}
            variant="unstyled"
            placeholder="Phone Number"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52 }}
            variant="unstyled"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52 }}
            variant="unstyled"
            secureTextEntry={true}
            placeholder="Confirm Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonCreate}>
        <Button style={styles.buttonDesign}>
            Create Account
        </Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Signup />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBE8',
  },
  BannerText: {
    fontSize:40,
    fontWeight:'bold',
    color: "#58382B",
    marginBottom: 10
  },
  Banner:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#C6ABA5"
  },
  CreateText: {
    marginTop: 25,
    fontSize:30,
    fontWeight:'bold',
    color: "#A58982",
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center'
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5,
    color: "#837979", 
    backgroundColor: "#D9D9D9", 
    borderRadius: 20, 
    height: 52, 
    width: 306
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15, 
    alignItems: 'center'
  },
  buttonDesign:{
    backgroundColor:'#837979', 
    borderRadius: 10, 
    width: 157,
    height: 42, 
    fontSize: 14, 
  },
  buttonCreate:{
    marginTop:35,
    marginLeft:15,
    marginRight:15,
    alignItems:'center', 
    marginBottom: 25
  },
});
