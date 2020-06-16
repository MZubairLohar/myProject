import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My To Do List</Text>

        </View>
    )
};

const styles = StyleSheet.create({

    header : {
        height: 80,
        paddingTop: 40,
        backgroundColor: 'blue' ,

    },
   
})

export default Header
