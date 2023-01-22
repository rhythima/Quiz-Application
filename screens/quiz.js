
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {useState,useEffect} from 'react';

const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const Quiz = ({navigation}) => {
    const[questions,setQuestions]=useState();
    const[ques,setQues]=useState(0);
    const[options,setOptions]=useState([]);
    const[score,setScore]=useState(0);
    const[isLoading,setIsLoading]=useState(false)

    const getQuiz=async()=>{
        setIsLoading(true)
        const url='https://opentdb.com/api.php?amount=10&category=18&type=multiple'
        const res=await fetch(url)
        const data=await res.json()
        console.log(data.results[0])
        setQuestions(data.results)
        setOptions(generateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    }

    useEffect(()=>{
        getQuiz();
    },[]);

    const handleNextPress=()=>{
        setQues(ques+1)  //for questions
        setOptions(generateOptionsAndShuffle(questions[ques+1]))   //for options
    }

    const handleSelectedOption=(_option)=>{
        //if correct option
        if(_option===questions[ques].correct_answer){
            setScore(score+10)
        }
        //else simply move to next question
        if(ques!==9){
            setQues(ques+1)  //for questions
        setOptions(generateOptionsAndShuffle(questions[ques+1]))   //for options
        }
        // console.log(_option===questions[ques].correct_answer)
        if(ques===9){
            handleShowResult()
        }
    }

    const handleShowResult=()=>{
        navigation.navigate('Result',{
            score:score
        })
    }

    const generateOptionsAndShuffle=(_question)=>{
        const options=[..._question.incorrect_answers]
        options.push(_question.correct_answer)
        // console.log(options,'before')
        shuffleArray(options)
        // console.log(options,'after')
        return options
    }

  return (
    <View style={styles.container}>
    {isLoading?<View style={{display:'flex',height:'100%', alignItems:'center', justifyContent:'center'}}>
    <Text style={{fontWeight:'bold', color:'#168AAD',fontSize:15}}>LOADING...</Text></View> 
    :questions &&(
        <View style={styles.parent}>
      <View style={styles.top}>
      <Text style={styles.question}>Q. {decodeURIComponent( questions[ques].question)}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={()=>handleSelectedOption(options[0])}>
            <Text style={styles.optionButton}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>handleSelectedOption(options[1])}>
            <Text style={styles.optionButton}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>handleSelectedOption(options[2])}>
            <Text style={styles.optionButton}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>handleSelectedOption(options[3])}>
            <Text style={styles.optionButton}>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
      {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity> */}
        {ques!==9 &&<TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
        {ques===9 &&<TouchableOpacity style={styles.button} onPress={handleShowResult}>
            <Text style={styles.buttonText}>SHOW RESULTS</Text>
        </TouchableOpacity>}
      </View>
      </View>
      )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%'
    },
    top:{
        marginVertical:16,
    },
    options:{
        marginVertical:16,
        flex:1
    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        // width:'100%',
        backgroundColor:'#168AAD',
        padding:12,
        paddingHorizontal:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:40
    },
    buttonText:{
        fontSize:15,
        fontWeight:'400',
        color:'white'
    },
    question:{
        fontSize:25,
        color:'black'
    },
    option:{
        fontSize:18,
        fontWeight:'bold'
    },
    optionButton:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:'#168AAD',
        paddingHorizontal:10,
        borderRadius:15,
        color:'white',
        fontSize:15
    },
    parent:{
        height:'100%'
    }
})
