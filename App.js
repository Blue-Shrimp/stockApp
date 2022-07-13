import React from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './src/navigation/Stack'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  )
}

export default App
