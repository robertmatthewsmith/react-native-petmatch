import React, { Component } from 'react';
import Home from '../Screens/HomeScreen';
import DogsInfo from '../Screens/DogsInfoScreen';
import { DOGS } from '../shared/dogs';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: { 
            screen: Home
        },   
        DogsInfo: {
            screen: DogsInfo
        }   
    }, 
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#F725C3'
            },
        }
    }
);

const AppNavigator = createAppContainer(HomeNavigator);

class Main extends Component {

    render() {
        return (
            <View
            style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}
>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;