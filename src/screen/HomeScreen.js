import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Config from 'react-native-config'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>HomeScreen</Text>
      <Text>ENV : {Config.ENV}</Text>
      <Text>APP ID : {Config.APP_ID}</Text>
      <Text>Build Version : {Config.BUILD_VERSION}</Text>
      <Text>App Version : {Config.APP_VERSION}</Text>
      <Text>APP Name: {Config.APP_NAME}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
})

export default HomeScreen
