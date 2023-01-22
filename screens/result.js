
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Result = ({navigation,route}) => {
  const {score}=route.params
  // console.log(params)

  const resultBanner=score>40?'https://cdni.iconscout.com/illustration/premium/thumb/victory-moment-by-man-4539136-3816342.png':
  'https://cdni.iconscout.com/illustration/premium/thumb/sad-man-feeling-anxiety-5599795-4677912.png'

  return (
    <View style={styles.container}>
      <Title titleText='YOUR RESULTS'/>
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image 
        source=
        {{
          uri:resultBanner
        }}
            style={styles.banner}
            resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
      <Text style={styles.buttonText}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  )
}



export default Result

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
},
scoreValue:{
  fontWeight:'300',
  alignSelf:'center',
  color:'#0081a7',
  fontSize:30
}
})
