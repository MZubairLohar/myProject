import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Zubair');

  const clickHandler = () => {
    setName ('Lohar');
  } 
  return (
    <View style={styles.container}>
     <Text>My name is {name}</Text>
     <View style={styles.buttonContainer}>
       <Button title='update state' onPress={clickHandler}/>
     </View>
     
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>React Native</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.body}>bold Text</Text>
        <Text>My First Project</Text>
      </View> */}
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
  buttonContainer:{
    marginTop:10 ,
  }
});
