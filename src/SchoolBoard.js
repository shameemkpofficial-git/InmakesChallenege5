import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    // TouchableHighlight,
    ImageBackground
}from 'react-native'

import  Icon  from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class SchoolBoard extends Component{
    render(){
        return(
            <KeyboardAwareScrollView>
            <View style={styles.container} >
                <ImageBackground source={require('../Assets/schoolboard.png')} 
                style={styles.backgroundImage}></ImageBackground>
                <View style={styles.childContainer}>

                    <TextInput
                    placeholder='Select board'
                    placeholderTextColor='#92aed3'
                    style={styles.inputView}
                    ></TextInput>
                    <Icon name='down' size={20} color='#92aed3' 
                    style={styles.icon}></Icon>

                    <TextInput
                    placeholder='Select class'
                    placeholderTextColor='#92aed3'
                    selectionColor='white'
                    style={styles.inputView}
                    ></TextInput>
                    <Icon name='down' size={20} color='#92aed3' 
                    style={{ height:20,
                        position:'absolute',
                        right:65,
                        top:110}}></Icon>


                        <TouchableHighlight style={styles.Button}
                        onPress={()=>this.props.navigation.navigate('AppTour')}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableHighlight>
                </View>
            </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'

    },
    backgroundImage:{
        height:500,
        width:'100%',
        marginRight:10
    },
    childContainer:{
        height:240,
        width:400,
        backgroundColor:'#1e314a',
        borderRadius:10
    },
    inputView:{
        height:55,
        width:295,
        backgroundColor:'#4a78b5',
        borderRadius:7,
        marginLeft:50,
        marginTop:20,
        // borderColor:'green',
        borderWidth:2,
        // paddingLeft:10
    },
    icon:{
        height:20,
        position:'absolute',
        right:65,
        top:40

    },
    Button:{
        height:45, 
        backgroundColor:'green', 
        width:320, 
        marginLeft:40,
        borderRadius:10,
        marginTop:20
    },
    buttonText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        paddingLeft:110,
        paddingTop:5
    }
})