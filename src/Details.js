import React,{Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableHighlight

}from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class Details extends Component{
    render(){
        return(
            <KeyboardAwareScrollView>
            <View style={styles.container} >
                <ImageBackground source={require('../Assets/Inmakes.png')}
                style={styles.Inmakes}></ImageBackground>

                <ImageBackground source={require('../Assets/logo.png')}
                style={styles.logo}></ImageBackground>

                <View style={styles.childContainer}>
                    <TextInput
                    placeholder='Full name'
                    keyboardType='name-phone-pad'
                    placeholderTextColor='#92aed3'
                    style={{height:55, width:295, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:50, paddingLeft:120, color:'white', marginTop:20}}></TextInput>

                <TextInput
                    placeholder='Email'
                    keyboardType='email-address'
                    placeholderTextColor='#92aed3'
                    style={{height:55, width:295, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:50, paddingLeft:120, color:'white', marginTop:20}}></TextInput>
                <TextInput
                    placeholder='Select state'
                    keyboardType='name-phone-pad'
                    placeholderTextColor='#92aed3'
                    style={{height:55, width:295, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:50, paddingLeft:120, color:'white', marginTop:20}}>
                       

                    </TextInput>
                    <Icon name='down' size={24} color='#92aed3'
                         style={{height:20, position:'absolute', right:65, top:190}}></Icon> 

                <TextInput
                    placeholder='Pin code'
                    maxLength={6}
                    keyboardType='numeric'
                    placeholderTextColor='#92aed3'
                    style={{height:55, width:295, backgroundColor:'#4a78b5', borderRadius:7, marginLeft:50, paddingLeft:120, color:'white', marginTop:20}}></TextInput>

                    <TouchableHighlight style={{height:45, backgroundColor:'green', width:320, marginLeft:40,borderRadius:10, marginTop:25}}
                    onPress={()=>this.props.navigation.navigate('SchoolBoard')}>
                        <Text style={{fontSize:20, color:'white', marginLeft:120, marginTop:8}} >Register</Text>
                    </TouchableHighlight>
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
        backgroundColor:'#fff'
    },
    Inmakes:{
        height:60,
        width:250,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:65
    },
    logo:{
        height:270,
        width:350,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
    },
    childContainer:{
        height:450,
        width:393,
        backgroundColor:'#1e314a',
        borderRadius:10
    }
})