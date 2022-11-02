import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, NativeBaseProvider, Button, Box, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';
import HomeyIcon from '../assets/homey-icon.png'; 
import { ChevronLeftIcon } from 'native-base';
import { IconButton } from 'native-base';


function Forgot() {
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
    
    {/* Forgot password text and back button*/}
      <Box flexDirection="row" paddingTop="5" paddingLeft="3" paddingBottom="12">
        
        <IconButton icon={<ChevronLeftIcon/>} borderRadius="full" _icon={{
            color: "#A58982",
            size: "4"
            }} 
            _pressed={{
            bg: "#A58982",}}
            onPress={() => navigation.navigate("Login")}
        />
        <Text style={styles.ForgotText}>Forgot Password?</Text>
      </Box>

      <View>
        <Text style={styles.ResetText}>Enter your account’s email below to reset your password</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
            style={{ height: 52, marginBottom: 0}}
            variant="unstyled"
            placeholder="Email"
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
      <View style={styles.buttonSubmit}>
        <Button style={styles.buttonDesign}>
            Submit
        </Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Forgot />
      
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
  ForgotInfo: {
    flex: 1,
  },
  ForgotText:{
    color: "#A58982",
    fontSize: 24,
    fontWeight:'bold',
    justifyContent:'center',
    marginLeft: 54,
    paddingTop: 4
  },
  ResetText:{
    color: "#A58982",
    fontSize: 16,
    textAlign:'center',
    paddingTop:5,
    marginRight: 25,
    marginLeft: 25
  },
  emailInput:{
    marginTop:10,
    marginRight:5, 
    color: "#837979", 
    backgroundColor: "#FFFFFF", 
    borderRadius: 20
  },
  buttonStyle:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
  },

  buttonSubmit:{
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
