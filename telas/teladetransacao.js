import React from 'react'
import {View,
TouchableOpacity,
Text,
StyleSheet,} from 'react-native'
import {Component} from 'react'
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Permissions from "expo-permissions";
import {ImageBackground} from "react-native"
import {TextInput} from "react-native"
import {KeyboardAvoidingView} from 'react-native'
import {Image} from 'react-native'

const fundo = require("../assets/background2.png")
const icone = require('../assets/appIcon.png')
const nome = require('../assets/appName.png')

export default class Transacao extends Component {
    constructor (props) {
        super (props) 
            this.state= {
                domstate:  'normal',
                hascamerapermissions: null,
                scanned: 'false',
                scanneddata: ''
            }
    }
    obterPermissaoDeCamera = async(domState)=> {
        const {status}= await Permissions.askAsync (Permissions.CAMERA)
        this.setState ({hascamerapermissions: status == "granted",
    domState: domState, scanned: false}) 
    }
    handleBarCodeScanned = async({type, data})=> {
        this.setState ({scanneddata: data, domState: "normal", scanned: true})
    }
    render () {
        const {domState, scanned, scanneddata, hascamerapermission}= this.state
        if (domState == "scanner") {
            return (
                <BarCodeScanner onBarCodeScanned= {scanned? undefined: this.handleBarCodeScanned} 
                style= {StyleSheet.absoluteFillObject}>
                </BarCodeScanner>
            )
        }
        return (
            <KeyboardAvoidingView behavior = 'padding'
            style = {styles.OrganizationStyle}>
            <ImageBackground source= {fundo}
            style= {styles.StyleImage}> 

            <View style= {styles.OrganizationStyle2}>
                <Image source= {icone}
                style= {styles.icone}>
                    </Image>

                    <Image source= {nome}
                    style= {styles.StyleName}>
                    </Image>
                    <View style= {styles.OrganizationStyle3}> 
                    <View style= {styles.OrganizationTextInput}> 
                    <TextInput placeholder= {'id do livro'}
                    style= {styles.TextInputStyle}>
                    </TextInput>
                    </View> </View>
                <TouchableOpacity style = {styles.ButtonStyle}onPress= {()=> this.obterPermissaoDeCamera ("scanner")}>
                    <Text style= {styles.TextStyle}>
                        qr code
                    </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
            </KeyboardAvoidingView> 
            )
    }
}

const styles = StyleSheet.create ({
    OrganizationStyle: {
        flex: 1,
        backgroundColor: "white",
    },
    TextStyle: {
        fontSize: 30,
        color: "white",
    },
    ButtonStyle: {
        width: '43%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 15,
    },
    StyleImage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain',

    }, 
    OrganizationStyle2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icone: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 80,
    },
    StyleName: {
        width: 180,
        resizeMode: 'contain',
    },
    OrganizationStyle3: {
        flex: 0.5,
        justifyContent: 'center',
    },
    OrganizationTextInput: {
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'black',
        borderColor: 'white'
    },
    TextInputStyle: {
        width: '57%',
        height: 50,
        padding: 10,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: 'white',
        color: 'gray'

    }
})
