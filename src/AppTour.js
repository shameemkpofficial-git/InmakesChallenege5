import { NavigationContainer } from "@react-navigation/native";
import React,{Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableHighlight,
    Alert

}from 'react-native'
import  Icon  from "react-native-vector-icons/AntDesign";

export default class AppTour extends Component{
    constructor(props){
        super(props);
        this.state= {
          main_text:'Welcome to Our Society',
          name: null
        }
      }
    render(){
        
        return(
            <View style={styles.container} >
                <ImageBackground source={require('../Assets/white.png')} 
                style={styles.childContainer}>
                    <Text style={styles.imgText}>Images/Illustrations</Text>
                </ImageBackground>

                <Text style={styles.mainText}>App your title</Text>
                <Text style={styles.subText}>The app tour description goes here</Text>

                
                <TouchableHighlight style={styles.Button}
                 onPress={()=>this.props.navigation.navigate('MyBottomTab')}  >
                    
                            <Icon name='arrowright' size={24} style={styles.buttonText}></Icon>
                        </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fff',
        
    },
    childContainer:{
        height:450,
        width:350,
        marginLeft:20,
        borderRadius:10,
        marginTop:25
    },
    imgText:{
        fontSize:20,
        marginTop:200,
        marginLeft:90,
        color:'black'
    },
    mainText:{
        fontSize:24,
        paddingLeft:130,
        fontWeight:'bold',
        paddingTop:40

    },
    subText:{
        fontSize:20,
        marginLeft:35,
        paddingTop:10
    },
    Button:{
        height:55, 
        backgroundColor:'green', 
        width:60, 
        marginLeft:160,
        borderRadius:10,
        marginTop:40
    },
    buttonText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        paddingLeft:19,
        paddingTop:15
    }
    
})