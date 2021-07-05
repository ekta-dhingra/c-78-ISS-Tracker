import React, {Component} from 'react';
import {Text, View,StyleSheet,Platform,StatusBar,SafeAreaView, TouchableOpacity, Image,ImageBackground } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
           <View style={styles.container}>
               <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require("../assets/bg_image.png")}
                style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                     <Text style={styles.titleText}> ISS Tracker App</Text>
                     
                 </View>

                <TouchableOpacity style={styles.routeCard}
                onPress={()=>
                this.props.navigation.navigate("IssLocation")}>

                    <Text style={styles.routeText}>ISS Loaction</Text>
                    <Text style={styles.knowMore}>{"know more-->"}</Text>
                     <Text style={styles.bgDigit}> 1</Text>
                     <Image source={require("../assets/iss_icon.png")}
                     style={styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.routeCard}
                onPress={()=>
                    this.props.navigation.navigate("Meteor")}>
                        
                    <Text  style={styles.routeText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"know more-->"}</Text>
                     <Text style={styles.bgDigit}> 2</Text>
                     <Image source={require("../assets/meteor_icon.png")}
                     style={styles.iconImage}></Image>
                </TouchableOpacity>

                </ImageBackground>  
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
    routeCard:{

        flex:0.25,
        marginLeft:30,
        marginRight:30,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30

    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover"
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:"grey",
        right:20,
        botton:-10,
        fontSize:150,
        zIndex:-1
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        right:20,
        top:-80,
        resizeMode:"contain"

    }
})