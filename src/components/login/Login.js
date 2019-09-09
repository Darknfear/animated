import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './Styles'
import Aimated from 'react-native-reanimated'
import { TapGestureHandler,State } from 'react-native-gesture-handler'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image
                        style={styles.img}
                        source={require("../../assets/icon/bg.jpg")} />
                </View>
                <TouchableOpacity>
                    <View style={styles.view}>
                        <View style={styles.button}>
                            <Text>SIGN IN</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}