import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    FlatList,
    
} from 'react-native'

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Divider } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Lessons=[
    {
        title:'  Long chapter can be         shown here '
    } ,
    {
        
            title:'  Long chapter can be         shown here '
        
    }
]

export default class Biology extends Component{
    render(){



        const renderItem = ({ item }) => (


            <View style={{height:100, width:280, margin:10, backgroundColor:'#fff', borderRadius:10}}>
            <Text style={{fontSize:20, color:'black', position:'absolute', right:25, top:15, paddingLeft:-30}} >{item.title}</Text>
            <FontAwesome5 name='dot-circle' color='black' size={15}
            style={{position:'absolute', left:20, top:70}}></FontAwesome5>
            <Text style={{position:'absolute', left:40, top:67}}
            onPress={()=> this.props.navigation.navigate('MyTopTab')}>Chapter 1</Text>

            <FontAwesome5 name='dot-circle' color='black' size={15}
            style={{position:'absolute', left:120, top:70}}></FontAwesome5>
            <Text style={{position:'absolute', left:140, top:67}}>3 parts</Text>
            

            </View>
         )




        return(
            <KeyboardAwareScrollView>
            <View style={{backgroundColor:'#D6D6D6', height:920, width:400}}>
            <View style={styles.MainContainer}>
                <TouchableHighlight style={{height:35, width:40, marginTop:30, marginLeft:30, borderRadius:2, borderWidth:2, borderColor:'#fff'}}>
                    <AntDesign name='left' size={24} color='green'
                    style={{paddingTop:5, paddingLeft:5}}></AntDesign>
                </TouchableHighlight>

                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff', marginTop:40, marginLeft:30}}>Biology</Text>
                <FontAwesome5 name='dot-circle' color='green' size={18}
                style={{paddingLeft:30, paddingTop:10}}></FontAwesome5>
                <Text style={{fontSize:15, color:'green', position:'absolute', top:145, left:50}}>12 chapters</Text>

                <FontAwesome5 name='dot-circle' color='green' size={18}
                style={{position:'absolute', top:147, left:150}}></FontAwesome5>
                <Text style={{fontSize:15, color:'green', position:'absolute', top:145, left:170}}>124 Hours</Text>
            </View>
            <View style={styles.subContainer}>
                <FlatList
                data={Lessons}
                horizontal={true}
                renderItem={renderItem}></FlatList>

        <FlatList style={{position:'absolute', top:240}}
                data={Lessons}
                horizontal={true}
                renderItem={renderItem}></FlatList>

        <FlatList style={{position:'absolute', top:120}}
                data={Lessons}
                horizontal={true}
                renderItem={renderItem}></FlatList>

        <FlatList style={{position:'absolute', top:360}}
                data={Lessons}
                horizontal={true}
                renderItem={renderItem}></FlatList>

        <FlatList style={{position:'absolute', top:480}}
                data={Lessons}
                horizontal={true}
                renderItem={renderItem}></FlatList>
            </View>
            
            </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer:{
        height:270,
        width:395,
        backgroundColor:'#302F49'
    },
    subContainer:{
        height:700,
        width:300,
        backgroundColor:'#DAD7FF',
        position:'absolute',
        right:50,
        top:230,
        borderRadius:10
    }
})