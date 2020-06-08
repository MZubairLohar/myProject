import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Zubair');
  const [age, setAge] = useState('30');
  //arry type
  //const [person, setPerson] = useState({name : 'eman' , age: 30});

  // const clickHandler = () => {
  //   setName ('Lohar');
  //   setPerson ({name:'chodri', age: 31});
  // } 
  return (
    <View style={styles.container}>
     <Text>Enter your Name:</Text>
      <TextInput 
      multiline
      style={styles.input}
      placeholder='e.g. jhon'
      onChangeText={(val) =>setName(val)}/>
      <Text>Enter your age:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g. 20'
      onChangeText={(val) =>setAge(val)}/>


  <Text>name:{name}, age: {age}</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // header: {
  //   backgroundColor: 'green',
  //   padding: 10,
  // },
  // boldText: {
  //   fontWeight:'bold',
  // },
  // body: {
  //   backgroundColor: 'blue',
  //   padding: 20,
  //   fontWeight:'bold'  //it wont work until declear it in text tag
  // }
  // buttonContainer:{
  //   marginTop:10 ,
  // },
  input:{
    borderWidth:1,
    borderColor: '#777',
    padding:8,
    margin: 10,
    width:200,


  }

});
