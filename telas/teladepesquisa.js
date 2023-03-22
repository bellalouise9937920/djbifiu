import React from 'react'
import {View,
TouchableOpacity,
Text,
StyleSheet,} from 'react-native'
import {Component} from 'react'

export default class Pesquisa extends Component {
    render () {
        return (
            <View style = {styles.OrganizationStyle}>
                <Text style = {styles.TextStyle}>
                    Tela de Pesquisa
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    OrganizationStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    TextStyle: {
        fontSize: 30,
        color: "black",
    }
})