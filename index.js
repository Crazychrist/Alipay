import { AppRegistry } from 'react-native';
import React, { Component } from 'react'

import RootScene from './src/RootScene';
export default class Alipay extends Component {
    render() {
        return (
            <RootScene />
        );
    }
}
AppRegistry.registerComponent('Alipay', () => RootScene);
