import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableHighlight,
    
    
}from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default class Otp extends Component{
    render(){
        return(
            <KeyboardAwareScrollView>
            <View style={styles.container} >
                <ImageBackground source={require('../Assets/Inmakes.png')}
                style={styles.backgroundImage} ></ImageBackground>

                <ImageBackground source={require('../Assets/Icon.png')} 
                style={styles.icon}></ImageBackground>

                <Text style={{fontWeight:'bold', fontSize:25, marginLeft:85, color:'black', marginTop:60}} >Verification Code</Text>
                <Text style={{marginLeft:72}} >Please type verification code sent to</Text>
                <Text style={{fontWeight:'bold', fontSize:18, marginLeft:110, margin:10}} >+91 0000000</Text>

                <View style={styles.childContainer} >
                    <View style={{height:60, flexDirection:"row"}} >
                        <TextInput
                        maxLength={1}
                        keyboardType='numeric' 
                         style={{height:55, width:55, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:9, marginTop:10}}></TextInput>

                        <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                         style={{height:55, width:55, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:9, marginTop:10}}></TextInput>

                        <TextInput 
                        maxLength={1}
                        keyboardType='numeric'
                        style={{height:55, width:55, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:9, marginTop:10}}></TextInput>

                        <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                         style={{height:55, width:55, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:9, marginTop:10}}></TextInput>

                        <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                         style={{height:55, width:55, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:9, marginTop:10}}></TextInput>
                        
                        <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                         style={{height:55, width:55, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:9, marginTop:10}}></TextInput>
                    </View>
                    <TouchableHighlight style={{height:45, backgroundColor:'green', width:320, marginLeft:40,borderRadius:10, marginTop:25}}
                    onPress={()=>this.props.navigation.navigate('Details')} >
                        <Text style={{marginLeft:120, marginTop:12,fontWeight:'bold', color:'#fff'}} >Resend OTP</Text>
                    </TouchableHighlight>

                    <Text style={{color:'#3b6091', fontSize:15, marginLeft:140, marginTop:5}} >Resend after 28s</Text>

                    <View style={{ height:'15%', marginTop:10, flexDirection:'row'}} >
                        <Icon name='call' size={24} color="green"
                        style={{marginLeft:135, marginTop:2}}></Icon>
                        <Text style={{fontSize:20, marginLeft:10, color:'green'}}>Contact Us</Text>
                    </View>
                    
                </View>
                
            </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
    backgroundImage:{
        height:60,
        width:'85%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:55,
        marginTop:30
    },
    icon:{
        height:190,
        width:350,
        marginTop:80
    },
    childContainer:{
       height:'32%',
       width:'100%',
       backgroundColor:'#1e314a',
       borderTopLeftRadius:10,
       borderTopRightRadius:10,
    }
})