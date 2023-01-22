
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './navigation'

const App = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})
