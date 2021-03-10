import React from 'react'
import{ createStackNavigator } from '@react-navigation/stack'
import AgendaScreen from '../screens/AgendaScreen'

const Stack = createStackNavigator()

export default function AgendaStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
                name="Agenda"
                component={AgendaScreen}
                options={{title: "Agenda"}} 
           />
       </Stack.Navigator>
    )
}
