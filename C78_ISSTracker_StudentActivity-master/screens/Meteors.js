import React, { Component } from "react";
import {View,
Text,
StyleSheet,
SafeAreaView,
Platform,
StatusBar,
Alert,
FlatList,
Image,
ImageBackground,
Dimensions
} from "react-native";
import axios from "axios";

export default class MeteorScreen extends Component {
    constructor(props){
    super(props);
    this.state={
      meteors:{},
    
    };
    }
     
    componentDidMount() {n
        this.getMeteors() 
    }

    getMeteors = () => {
        axios
        .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=nAkq24DJ2dHxzqXyzfdreTvczCVOnwJuFLFq4bDZ")
        .then(response => {
            this.setState({ meteors: response.data.near_earth_objects})
        })
        .cath(error =>{
           Alert.alert(error.message)
        })
    }

    renderItem = ({item}) => {
     let meteor = item
     let bg_img, speed, size;
     if (meteor.threat_score <= 30){
        bg_img = require("../assets/meteor_bg1.png")
        speed = require("../assets/meteor_speed3.gif")
        size = 100 
     } else if(meteor.threat_score <= 75 ){
        bg_img = require("../assets/meteor_bg2.png")
        speed = require("../assets/meteor_speed3.gif")
        size = 150 
     }else
        bg_img = require("../assets/meteor_bg3.png")
        speed = require("../assets/meteor_speed3.gif")
        size = 200 
    }
    return(
        <View>
             <ImageBackground source={bg_img} style={styles.backgroundImage}> 
               <View styles={styles.giftContainer}> 
               <Image source={speed} style={{ width: size, height: size, alignSelf: "center" }}></Image>
               <View>
         <Text style={[styles.cardTitle, { marginTop: 400, marginLeft: 50 }]}>{item.name} </Text>
         <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Minimum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_min}</Text>
         <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Maximum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_max}</Text>
         <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Velocity (KM/H) - {item.close_approach_data[0].relative_velocity.kilometers_per_hour}</Text>
         <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Missing Eath by (KM) -- {item.close_approach_data[0].miss_distance.kilometers}</Text>
        </View>
       </View>
       </ImageBackground>
       </View>
    );
};