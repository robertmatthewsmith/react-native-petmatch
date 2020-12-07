import React from 'react';
import { Text, StyleSheet, View, } from 'react-native';


const Home = ({item}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>PetMatch</Text>
        </View>
        
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 40,
       padding: 50,
       alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontFamily: 'American Typewriter',
        alignItems: 'center'
    }
})

export default Home;