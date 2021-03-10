import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import  LogScreen from '../screens/LogScreen'
import  SignUpScreen from '../screens/SignUpScreen'
import  ProfileScreen from '../screens/ProfileScreen'
import  EncuestaScreen from '../screens/EncuestaScreen'
import AgendaStack from './AgendaStack'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'
import EncuestaStack from './EncuestaStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {

   const screenOptions = (route, color) =>{
      let iconName
      switch (route.name) {
         case "LogIn":
            iconName= "account-check-outline"
            break;
         case "SignUP":
            iconName= "account-plus-outline"
            break;
         case "Home":
            iconName= "home-outline"
            break;
         case "Profile":
            iconName= "account-outline"
            break;
         case "Encuesta":
            iconName= "chart-box-outline"
            break;
         case "Agenda":
            iconName= "book-check-outline"
            break;
      
      }


   }

    return (
        <NavigationContainer>
            <Tab.Navigator>
            
            <Tab.Screen 
                    name="Home"
                    component={HomeStack}
                    options={{title: "Home"}}
                    />
                 
                 <Tab.Screen 
                    name="Encuesta"
                    component={EncuestaStack}
                    options={{title: "Votar"}}
                    />
                    
                 <Tab.Screen 
                    name="Agenda"
                    component={AgendaStack}
                    options={{title: "Agenda"}}
                    />
                   
                 <Tab.Screen 
                    name="Profile"
                    component={ProfileStack}
                    options={{title: "Cuenta"}}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
