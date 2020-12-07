import React, { Component } from 'react';
import Home from '../Screens/HomeScreen';
import DOGS from '../shared/dogs';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS
        };
    }

    render() {
        return <Home  />;
    }
}

export default Main;