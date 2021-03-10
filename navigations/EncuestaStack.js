import React from 'react'
import{ createStackNavigator } from '@react-navigation/stack'
import EncuestaScreen from '../screens/EncuestaScreen'

const Stack = createStackNavigator()

export default function EncuestaStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
                name="Encuesta"
                component={EncuestaScreen}
                options={{title: "Encuesta"}} 
           />
       </Stack.Navigator>
    )
}
