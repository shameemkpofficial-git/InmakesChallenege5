import React,{Component} from "react";
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

import { FlatList } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const Class = [
    {
        id:1,
        title:'Long chapter name can be shown here',
        Image: require('../../Assets/teacher1.jpg'),
        subject:'Biology'
    },
    {
        id:2,
        title:'Long chapter name can be shown here',
        Image: require('../../Assets/teacher2.jpg'),
        subject:'Biology'
    }
]

export default class Videos extends Component{
    render(){

        const RenderClassItem = ({item}) => (
            <View style={{height:250, width:320, backgroundColor:'#fff', marginTop:30, marginLeft:30}}>
                <Image style={{height:150, width:300, marginLeft:10, marginTop:10}} source={item.Image}></Image>
                <Text style={{fontSize:18, color:'black', paddingLeft:20}}>{item.title}</Text>
                <FontAwesome5Icon name='dot-circle' color='black' size={18}
                style={{paddingLeft:40, paddingTop:10}}></FontAwesome5Icon>
                <Text style={{color:"black", position:'absolute', top:214, left:65}}>Chapter1</Text>

                <FontAwesome5Icon name='dot-circle' color='black' size={18}
                style={{position:'absolute', top:214, left:150}}></FontAwesome5Icon>
                <Text style={{position:'absolute', color:'black', top:212, left:170}}>Part 1</Text>
            
                <View style={{backgroundColor:'green', height:30, width:60, position:'absolute', top:130, left:250}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:15, paddingTop:3, paddingLeft:2}}>Biology</Text>
                </View>
  
            </View>
        )

        return(
            <View style={styles.Container}>
               < FlatList
                data={Class}
                renderItem={RenderClassItem}></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        height:720,
        width:395,
        backgroundColor:'#E7E6EF'
    }
})