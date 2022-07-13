import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Tabs } from './Tabs'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={Tabs} />
  </Stack.Navigator>
)
