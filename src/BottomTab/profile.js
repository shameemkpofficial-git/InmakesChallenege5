import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableHighlight,
    Image,
    ScrollView
}from 'react-native'

import  AntDesign  from "react-native-vector-icons/AntDesign";
import  Community  from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from 'react-native-vector-icons/Entypo'

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Divider } from "react-native-paper";
export default class Profile extends Component{
    render(){
        return(
            
            <ScrollView showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.MainContainer}>
                <View style={styles.SubContainer}>
                    <Text style={styles.profileText}>Profile</Text>

                    <AntDesign name='bells' color='#fff' size={24}
                    style={{position:'absolute', right:80, top:30}}></AntDesign>

                    <Community name='dots-vertical-circle' color='#569c06' size={28}
                    style={{position:'absolute', right:30, top:27}}
                    ></Community>

                    
                </View>
                <View style={styles.personalContainer}>
                    <Image source={require('../../Assets/Person.jpg')}
                    style={{height:60, width:60, borderRadius:360, marginLeft:10, marginTop:10, borderWidth:5, borderColor:'#569c06'}}>
                    </Image>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'black', position:'absolute', right:150, top:20}}>Jane Doe</Text>
                    <Text style={{fontSize:15, color:'black', position:'absolute', right:150, top:45}}>ID:12345678</Text>

                    <Text style={{fontSize:18, fontWeight:'bold', color:'black', marginTop:20, marginLeft:15}}>Personal Info</Text>

                    <Text style={{color:'#B1D0E0'}}>------------------------------------------------------------------------------</Text>
                    


                    <View style={styles.personalInfo}>
                        <Text style={{color:'black', paddingBottom:10, paddingLeft:10}}>Account Settings</Text>
                        <Divider style={styles.divider}/>
                        <Text style={{color:'black', paddingBottom:10, paddingLeft:10}}>E-mail</Text>
                        <Divider style={styles.divider}/>
                        <Text style={{color:'black', paddingBottom:10, paddingLeft:10}}>Number</Text>
                    </View>
                    <View style={{height:'30%', width:'55%', backgroundColor:'#fff', position:'absolute', right:4, top:133}}>
                        <Text style={{color:'black', fontWeight:'bold', paddingBottom:10}}>Aaron Taylor</Text>
                        <Divider style={styles.divider}/>
                        <Text style={{color:'black', fontWeight:'bold', paddingBottom:10}}>emaidid123@server.com</Text>
                        <Divider style={styles.divider}/>
                        <Text style={{color:'black', fontWeight:'bold'}}>+91 3254325643</Text>

                    </View>
                    <Text style={{color:'#B1D0E0'}}>------------------------------------------------------------------------------</Text>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'black', marginTop:10, marginLeft:15}}>Course Info</Text>
                    <Text style={{color:'#B1D0E0'}}>------------------------------------------------------------------------------</Text>

                    <View style={{height:'20%', width:'45%', backgroundColor:'White'}}>
                    <Text style={{color:'black', paddingBottom:10, paddingLeft:10}}>Centre</Text>
                    <Divider style={styles.divider}/>
                    <Text style={{color:'black', paddingBottom:10, paddingLeft:10}}>Course</Text>
                    <Divider style={styles.divider}/>
                    <Text style={{color:'black', paddingBottom:10, paddingLeft:10}}>Payment Status</Text>
                    <Divider style={styles.divider}/>
                    <Text style={{color:'black', paddingBottom:10, paddingLeft:10}}>Expiry Date</Text>

                    </View>
                    
                   
                    <View style={{height:'30%', width:'55%', backgroundColor:'#fff', position:'absolute', right:1, top:290, marginBottom:30}}>
                        <Text style={{color:'black', fontWeight:'bold', paddingBottom:10}}>Inmakes Edu</Text>
                        <Divider style={styles.divider}/>
                        <Text style={{color:'black', fontWeight:'bold', paddingBottom:10}}>Plus Two Science</Text>
                        <Divider style={styles.divider}/>
                        <Text style={{color:'black', fontWeight:'bold', paddingBottom:10}}>Free</Text>
                        <Divider style={styles.divider}/>
                        <Text style={{color:'black', fontWeight:'bold', paddingBottom:10}}>Not Applicable</Text>
                     </View>
                     <Divider style={styles.divider}/>

                     <TouchableHighlight style={styles.button}>
                         <>
                         <View style={{height:40,width:40, backgroundColor:'#3f991f', position:'absolute', right:250, top:10}}>
                     <AntDesign name='wallet' color='#fff' size={24}
                    style={{position:'absolute', right:10, top:9}}></AntDesign>
                    </View>
                         <Text style={{color:'#fff', paddingLeft:90, paddingTop:17}}>Custom Payment</Text>
                         <Entypo name='chevron-thin-right' color='#fff' size={24}
                         style={{position:'absolute', right:30, top:15}}></Entypo>
                        </>
                     </TouchableHighlight>


                     <TouchableHighlight style={styles.button}>
                         <>
                         <View style={{height:40,width:40, backgroundColor:'#3f991f', position:'absolute', right:250, top:10}}>
                     <Entypo name='forward' color='#fff' size={24}
                    style={{position:'absolute', right:10, top:9}}></Entypo>
                    </View>
                         <Text style={{color:'#fff', paddingLeft:90, paddingTop:17}}>Refrals</Text>
                         <Entypo name='chevron-thin-right' color='#fff' size={24}
                         style={{position:'absolute', right:30, top:15}}></Entypo>
                        </>
                     </TouchableHighlight>


                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer:{
        height:714,
        width:397,
        backgroundColor:'#e1ede2'
    },
    SubContainer:{
        height:'40%',
        width:'100%',
        backgroundColor:'#2b3254'
    },
    profileText:{
        color:'#fff',
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:160,
        paddingTop:30
    },
    personalContainer:{
        height:'90%',
        width:'80%',
        backgroundColor:'#fff',
        position:'absolute',
        right:40,
        top:90,
        borderRadius:10
        
    },
    personalInfo:{
        height:'13%',
        width:'40%',
        backgroundColor:'#fff', 
        marginLeft:10,
    },
    divider:{
        color:'#B1D0E0',
        borderWidth:0.5,
    },
    button:{
        backgroundColor:'green',
        height:60,
        width:315,
        borderRadius:10,
        marginTop:30
    }
})
