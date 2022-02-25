import React,{Component} from "react";
import { StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    TextInput,
} from "react-native"; 

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default class Register extends Component{
    constructor(){
        super();
        this.state={
            name: ''
        }
    }

    updateValue(mob){
        console.log(mob)
        this.setState({name:mob})

    }

    render(){
        
        return(
            <KeyboardAwareScrollView>

            <View style={styles.container} >
                <ImageBackground source={require('../Assets/Inmakes.png')} 
                style={styles.backgroundImage}></ImageBackground>
                <Text style={styles.mobText} >Enter your mobile number</Text>
                <Text>We will send you an OTP to verify</Text>

                <View style={styles.childContainer} >
                    <View style={{flexDirection:'row', height:150}}>
                    
                   <View style={styles.countryCode}>
                       <TextInput 
                       placeholder='+91'
                       placeholderTextColor='#fff'
                       style={{ marginLeft:10}}
                       ></TextInput>
                      
                   </View>
                   
                   <View style={styles.phoneNumber} >
                       <TextInput
                       placeholder='Mobile Number'
                       placeholderTextColor='#92aed3'
                       keyboardType='numeric'
                       maxLength={10}
                       onChangeText={(mob)=> this.updateValue(mob)}
                       style={{ marginLeft:65, color:'#fff'}}></TextInput>
                   </View>
                   
    

                   </View>
                   <TouchableHighlight style={{height:45, backgroundColor:'green', width:320, marginLeft:40,borderRadius:10, marginTop:-40}} 
                   onPress={() =>this.props.navigation.navigate('Otp')
                   }>

                        <Text style={{marginLeft:130, marginTop:12,fontWeight:'bold', color:'#fff'}} >Continue</Text>
                    </TouchableHighlight>
                   
                </View>
                
                
                
            </View>
            </KeyboardAwareScrollView>
            
        )
    }
}

const styles= StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    backgroundImage:{
        height:80,
        width:300,
        alignItems:'center',
        justifyContent:'center',
        paddingRight:-65,
        marginTop:195

        
    },
    mobText:{
        fontWeight:'bold',
        fontSize:20,
        alignItems:'center',
        justifyContent:'center',
        color:'black',
        marginTop:210
        
    },
    childContainer:{
       height:'30%',
       width:'100%',
       backgroundColor:'#1e314a',
       borderTopLeftRadius:20,
       borderTopRightRadius:20,
       marginTop:50,
    //    flexDirection:'row'
    },
    countryCode:{
        height:'30%',
        width:'14%',
        backgroundColor:'#4a78b5',
        marginLeft:40,
        marginTop:40,
        borderRadius:10
    },
    phoneNumber:{
        height:'30%',
        width:'60%',
        backgroundColor:'#4a78b5',
        marginTop:40,
        marginLeft:30,
        borderRadius:10
    }
})