import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Forgot from './screens/Forgot';
import Landing from './screens/Landing';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
      {/* <Stack.Screen name="Landing" component={Landing} /> */}
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}


// import React from "react";
// import {
//   Text,
//   Link,
//   HStack,
//   Center,
//   Heading,
//   Switch,
//   useColorMode,
//   NativeBaseProvider,
//   extendTheme,
//   VStack,
//   Box,
// } from "native-base";
// import NativeBaseIcon from "./components/NativeBaseIcon";
// import { Platform } from "react-native";

// // Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// // extend the theme
// export const theme = extendTheme({ config });

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Center
//         _dark={{ bg: "blueGray.900" }}
//         _light={{ bg: "blueGray.50" }}
//         px={4}
//         flex={1}
//       >
//         <VStack space={5} alignItems="center">
//           <NativeBaseIcon />
//           <Heading size="lg">Welcome to NativeBase</Heading>
//           <HStack space={2} alignItems="center">
//             <Text>Edit</Text>
//             <Box
//               _web={{
//                 _text: {
//                   fontFamily: "monospace",
//                   fontSize: "sm",
//                 },
//               }}
//               px={2}
//               py={1}
//               _dark={{ bg: "blueGray.800" }}
//               _light={{ bg: "blueGray.200" }}
//             >
//               App.js
//             </Box>
//             <Text>and save to reload.</Text>
//           </HStack>
//           <Link href="https://docs.nativebase.io" isExternal>
//             <Text color="primary.500" underline fontSize={"xl"}>
//               Learn NativeBase
//             </Text>
//           </Link>
//           <ToggleDarkMode />
//         </VStack>
//       </Center>
//     </NativeBaseProvider>
//   );
// }

// // Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
