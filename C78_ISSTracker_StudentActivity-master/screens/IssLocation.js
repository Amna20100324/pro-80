import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Alert,
    Platform
} from 'react-native';

export default class IssLocationScreen extends Component {
        render() {
        return (

        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require('../assets/bg.png')}style={styles.backgroundImage}></ImageBackground>
        <View style={styles.titleContainer}></View>
        <Text style={styles. titleText}>ISS Location</Text>
        </View>
        )
     }
   }


const styles = StyleSheet.create({
    
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
})