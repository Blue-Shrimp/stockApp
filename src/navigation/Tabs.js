import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen'
import MyPageScreen from '../screen/MyPageScreen'

const Tab = createBottomTabNavigator()
export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MyPageScreen" component={MyPageScreen} />
    </Tab.Navigator>
  )
}
