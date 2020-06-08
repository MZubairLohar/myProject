import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  const[people, setPeople] = useState (
    [
      {name: 'Zubair', key:'1'},
      {name: 'Umair', key:'2'},
      {name: 'Ubaid', key:'3'},
      {name: 'Imran', key:'4'},
      {name: 'Ashir', key:'5'},
      {name: 'shabbir', key:'6'},
      {name: 'Kashif', key:'7'},
      {name: 'Bilal', key:'8'},
      {name: 'faisal', key:'9'}
      
    ]);
  return(
    
    <View style={styles.container}>
      <ScrollView>
      {people.map((item) =>{
        return(
          <View key={item.key}>
            <Text style={styles.item}>
              {item.name}</Text>
             
          </View>
          
        )
      })}
           </ScrollView>
    </View>
   
  );
    };
  
  // const [name, setName] = useState('Zubair');
  // const [age, setAge] = useState('30');
  //arry type
  //const [person, setPerson] = useState({name : 'eman' , age: 30});

  // const clickHandler = () => {
  //   setName ('Lohar');
  //   setPerson ({name:'chodri', age: 31});
  // } 
//   return (
//     <View style={styles.container}>
//      <Text>Enter your Name:</Text>
//       <TextInput 
//       multiline
//       style={styles.input}
//       placeholder='e.g. jhon'
//       onChangeText={(val) =>setName(val)}/>
//       <Text>Enter your age:</Text>
//       <TextInput 
//       keyboardType='numeric'
//       style={styles.input}
//       placeholder='e.g. 20'
//       onChangeText={(val) =>setAge(val)}/>


//   <Text>name:{name}, age: {age}</Text>
    
//     </View>
//   );
// }

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
  // input:{
  //   borderWidth:1,
  //   borderColor: '#777',
  //   padding:8,
  //   margin: 10,
  //   width:200,


  // }
  item:{
    margin:15,
    padding:15,
    backgroundColor:'green',
    fontSize:24
  }

});
