import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import { Card, Tile, ListItem,  } from 'react-native-elements';
import { DOGS } from '../shared/dogs';
import { FlatList } from 'react-native-gesture-handler';


function RenderItem({item}) {
    
    if (item) {
       

        return(
            <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.FeaturedSubtitle>{item.breed}</Card.FeaturedSubtitle>
            <Image 
                source={require('./img/dog-thumbs/Steele-2_3.jpg')}  
                style={styles.image}
            />
            <Text style={styles.comment}>{item.comments}</Text>
            </Card>
        );
     
        }
    return <View />;
}


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS
        };
        

    }

    static navigationOptions = {
        title: 'Home'
    }
    
    render() {
        const filteredFeatured = this.state.dogs.filter(dog => dog.age > 4);


           return (
                 
            <ScrollView >
            
             <Text style={styles.text}>PetMatch</Text>
             <Text style={styles.comment}>Featured Pet</Text>
                <RenderItem
                   
                    item={filteredFeatured.map(dog => dog)[0]}
                   
                        
                    />
                
            </ScrollView>
            
               
            );
      };
     
  
};



const styles = StyleSheet.create ({
    container: {
        marginTop: 20,
        padding: 50,
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontFamily: 'American Typewriter',
        textAlign: 'center'
    },
    comment: {
        fontSize: 20,
        fontFamily: 'American Typewriter',
        textAlign: 'center'
    },
    image: {
        width: 300,
        height: 250,
        resizeMode: "stretch",
    }
})

export default Home;