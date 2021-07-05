import React, {Component} from 'react';
import {Text, View,StyleSheet,Platform,StatusBar,SafeAreaView, TouchableOpacity, Image,ImageBackground } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from "axios"

export default class IssInfo extends Component{
    constructor(){

        super()
        this.state={
            location:{}
        }
    }

    componentDidMount(){
        this.getIssLocation();

        try{
            setInterval(async()=>{
                this.getIssLocation()
            }, 5000)
        }
        catch(error){
            console.log(error.message)
        }
    }

    getIssLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")

        .then(response=>{
            this.setState({location:response.data})
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    render(){
        return(
            <View style={styles.infoContainer}>
                    <Text style={styles.infoText}> Latitude:{this.state.location.latitude}</Text>
                    <Text style={styles.infoText}> Longitude:{this.state.location.longitude}</Text>
                    <Text style={styles.infoText}>Altitude(KM):{this.state.location.altitude}</Text>
                    <Text style={styles.infoText}>Velocity(KM/H):{this.state.location.velocity}</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    droidSafeArea:{
        marginTop: Platform.OS==="android"? StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover"
    },
    mapContainer:{
        flex:0.6
    },
    map:{
        width:"100%",
        height:"100%"
    },
    infoContainer:{
        flex:0.2,
        backgroundColor:"white",
        marginTop:-10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30

    },

    infoText:{
    fontSize:15,
    color:" black",
    fontWeight:"bold"
    }
})