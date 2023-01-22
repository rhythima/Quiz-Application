
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='QUIZLLER'/>
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/education-quiz-3975777-3290981.png'}}
            style={styles.banner}
            resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')}
      style={styles.button}>
      <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%'
    },
    button:{
        width:'100%',
        backgroundColor:'#168AAD',
        padding:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:40
    },
    buttonText:{
        fontSize:20,
        fontWeight:'400',
        color:'white'
    }
})
