import React,{Component} from "react";
import { Divider } from 'react-native-paper';
import{
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    ImageBackground
    
} from 'react-native'

import  Feather   from "react-native-vector-icons/Feather";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container} >
                <View style={{borderColor:'#fff', height:40, width:40, borderWidth:2, marginTop:20, marginLeft:20}}>
                    <Text style={{color:'green', fontSize:24, paddingLeft:10}}
                    onPress={()=> this.props.navigation.navigate('Home')}>X</Text>
                </View>
                
                <Image source={require('../Assets/Person.jpg')}
                style={{height:80, width:80, marginTop:30, marginLeft:20, borderRadius:40}}></Image>
                <Text style={{color:'#fff', fontSize:20, position:'absolute', right:60, top:100}}>Aaron Taylor</Text>
                <Text style={{fontSize:16, color:'#fff', position:'absolute', right:105, top:130}}>ID:1234   </Text>

                <Feather  name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Feather name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Feather name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Feather name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Feather name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Feather name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Feather name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Feather name='square' color='green' size={34}
                style={{paddingLeft:20, paddingTop:20}}></Feather>

                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:190}}
                onPress={()=> this.props.navigation.navigate('ExamCorner')}>Exam Corner</Text>
                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:245}}
                onPress={()=> this.props.navigation.navigate('Subscription')}>Subscription</Text>
                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:300}}
                onPress={()=> this.props.navigation.navigate('Analatics')}>Analatics</Text>
                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:355}}>Downloads</Text>
                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:410}}>Notfication</Text>

                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:465}}>Referal</Text>



                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:525}}>Share App</Text>
                <Text style={{color:'#fff', fontSize:24, paddingLeft:80, position:'absolute', top:575}}>Logout</Text>




            </View >
            
        )
    }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#252a30',
        height:720
    },
    
     
    

    })