import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Exam extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.orderText}>hi this is Exam page</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange'
    },
    orderText:{
        fontSize:24,
        fontWeight:"bold",
        color:'#fff',
    }
})