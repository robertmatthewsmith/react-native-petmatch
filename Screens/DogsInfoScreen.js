import React, { Component } from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDogs({dogs}) {
  

    if(dogs) {
        return ( 
            <Card
                featuredTitle={dogs.name}
                image={{uri: dogs.imaged}}
            >
                <Text style={{margin: 10}} >
                    {dogs.comments} {dogs.breed}
                </Text>

            </Card>
        )
    }
    return <View />;
}

function DogsInfo(props) {

        return <RenderDogs dog={props.dog} />

    }

export default DogsInfo;