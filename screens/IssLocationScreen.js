import React, {Component} from 'react';
import {Text, View,StyleSheet,Platform,StatusBar,SafeAreaView, TouchableOpacity, Image,ImageBackground } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from "axios"
import IssInfo from './IssInfo';

export default class IssLocationScreen extends Component{
    constructor(){
        super()
        this.state={
            location:{}
        }
    }

    componentDidMount(){
        this.getIssLocation();
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
        if(Object.keys(this.state.location).length===0){
            return(
                <View style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        }
        else{
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.SafeAreaView}/>
                    <ImageBackground source={require("../assets/iss_bg.jpg")}
                    style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}> ISS Location</Text>
                        </View>
    
                        <View style={styles.mapContainer}> 
                            <MapView style={styles.map}
                                region={{
                                 latitude:this.state.location.latitude,
                                 longitude: this.state.location.longitude,
                                 latitudeDelta: 100,
                                 longitudeDelta: 100,
                                }}>
                                 <Marker
                                    coordinate={{
                                        latitude:this.state.location.latitude,
                                        longitude: this.state.location.longitude }}>
                                            <Image
                                                source={require("../assets/iss_icon.png")}
                                                style={{height:50,width:50}}>
                                            </Image>
                                 </Marker>
                            </MapView>
                        </View>
                       
                                <IssInfo/>
                    </ImageBackground>
                </View>
            )
        } 
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