import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

export default class Header extends Component {
    render () {
        return (
            <View>
                <Text>
                    Header
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'blue'
    }
})