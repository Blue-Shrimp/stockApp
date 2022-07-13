import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
  },
})

export default HomeScreen
