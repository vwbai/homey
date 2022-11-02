import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

// screens
import React from 'react';
import Home from './main/Home'; 
import Maintenance from './main/Maintenance'; 
import Tasks from './main/Tasks'; 
import Projects from './main/Projects'; 
import Account from './main/Account'; 
import { StatusBar } from 'expo-status-bar'; 
import { NativeBaseProvider} from 'native-base';

const homeName = 'Home'; 
const maintenanceName = 'Maintenance'; 
const tasksName = 'Tasks';
const projectsName = 'Projects'; 
const accountName = 'Account'; 

function Landing() {
    const Tab = createBottomTabNavigator(); 
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
            initRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName; 
                    let routeName = route.name; 

                    if (routeName === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (routeName === maintenanceName) {
                        iconName = focused ? 'construct' : 'construct-outline'
                    } else if (routeName === tasksName) {
                        iconName = focused ? 'clipboard' : 'clipboard-outline'
                    } else if (routeName == projectsName) {
                        iconName = focused ? 'pie-chart' : 'pie-chart-outline'
                    } else if (routeName == accountName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                "tabBarActiveTintColor": "#C6ABA5",
                "tabBarInactiveTintColor": "#D9D9D9",
                "tabBarStyle": [
                    {
                    "display": "flex", 
                    },
                    null
                ]
            })}
            >

                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={maintenanceName} component={Maintenance}/>
                <Tab.Screen name={tasksName} component={Tasks}/>
                <Tab.Screen name={projectsName} component={Projects}/>
                <Tab.Screen name={accountName} component={Account}/>
                

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default () => {
    return (
      <NativeBaseProvider>
          <Landing />
      </NativeBaseProvider>
    )
  }