import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const MyPageScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>MyPageScreen</Text>
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

export default MyPageScreen
