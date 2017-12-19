import React, { Component, Props } from "react";
import { Text } from 'react-native';


export default class SettingPage extends Component {

    constructor(props : Props){
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <Text style = {{fontSize : 40}}> 没东西呢</Text>
        );
    }
}