
import React,{Component} from "react";
import {
    StyleSheet,
    View,
    TouchableHighlight,
    FlatList,
    ImageBackground,
    Text,
    Image,
 
}from 'react-native'
import  Icon  from "react-native-vector-icons/AntDesign";
import  Entypo  from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const images = [
    {
        id:'1',
        title:'Course Title',
        image: require('../Assets/Biology.jpg')
    },
    {
        id:'2',
        title:'Course Title',
        image: require('../Assets/Biology2.jpg')
    }
    
]

const subjects = [
    {
        id:'1',
        title:' Biology'
    },
    {
        id:'2',
        title:' Physics'
    },
    {
        id:'3',
        title:' Chemistry'
    }
]

const person = [
    {
        id: '1',
        image: require('../Assets/Person.jpg'),
        title:'Target Live Class',
        description:' Live classes by best teachers Learning hub to clear your doubts and to provide individual attention',
        button:'Start'
    },
    {
        id:'2',
        image: require('../Assets/Person.jpg'),
        title:'  Avail free Online counselling session',
        description:" By LearningHub's career experts",
        button:'Start'
    }
]






export default class Home extends Component{
    render(){   
        const renderItem = ({ item }) => (


            <View style={{height:'20%', width:'50%', margin:10}}>
            <Image source={item.image} style={{height:150, width:280}}></Image>
            <Text style={{fontSize:15, color:'#fff', position:'absolute', left:50, top:110, paddingLeft:-30}} >{item.title}</Text>
            <Icon name='play' size={30} color='#fff'
            style={{position:'absolute', top:105, right:115}}
            ></Icon>

            </View>
         )

         const RenderSubjectItem = ({ item}) =>(
             
            <View style={{height:65, width:165, backgroundColor:'#fff', paddingLeft:20, paddingTop:20}}>
            <Text style={{fontSize:22, color:'green', borderWidth:2, paddingLeft:29, borderColor:'green', borderRadius:5}}
            onPress={()=> this.props.navigation.navigate('Biology')}>{item.title}</Text>
            <Icon name='rightcircle' size={15} color='green'
            style={{position:'absolute', right:120, top:28}}></Icon>
        </View>
        
         )

         const RenderClassItem = ({ item}) => (
             <View style={{height:30, width:245, backgroundColor:'#fff', paddingHorizontal:30, paddingTop:30 }}>
                 <Image source={item.image} style={{height:250, width:200,marginLeft:10, borderRadius:10}}></Image>
                 <Text style={{fontWeight:'bold', color:'#fff', fontSize:20, position:'absolute', right:30, top:80}}>{item.title}</Text>
                 <Text style={{color:'#fff', position:'absolute', fontSize:15, right:10, top:140}} >{item.description}</Text>
                 <TouchableHighlight style={{height:25, width:70, backgroundColor:'green', position:'absolute', right:70, top:210}}>
                     <Text style={{color:'#fff', paddingLeft:20}}>Start</Text>
                 </TouchableHighlight>
             </View>
         )
        return(
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <TouchableHighlight style={styles.profileButton}
                onPress={() =>this.props.navigation.navigate('MyDrawer')}>
                    <Icon name='profile' color='green' size={24}
                    style={styles.profileIcon}></Icon>
                </TouchableHighlight>

                <ImageBackground source={require('../Assets/Inmakes.png')}
                style={styles.inmakesLogo}></ImageBackground>

                <View style={styles.classContainer} >
                    <Entypo name='vinyl' size={20} color='green'
                    style={styles.profileIcon}></Entypo>
                    <Text style={styles.classText}>Classes</Text>


                    
                </View>

                <Text style={{color:'black', marginTop:40, marginLeft:20, fontSize:15}} >GoodMorning</Text>
                <Text style={{color:'black', fontWeight:'bold', fontSize:34, marginLeft:20}} >Aaron Taylor</Text>


                <View style={styles.dropTab}>
                    <Text style={{color:'#c2c2d6', marginTop:5, marginLeft:20}}>Class</Text>
                    <Text style={{color:'#fff', fontSize:15, marginLeft:20}}>Plus Two Science</Text>
                    <Icon name='down' color='#fff' size={18}
                    style={{position:'absolute', right:45, top:20}}></Icon>
                </View>

                    <View style={{height:80}}>
                <FlatList style={{flex:1}}
                data={subjects}
                horizontal={true}
                renderItem={RenderSubjectItem}
                showsHorizontalScrollIndicator={false}>
                </FlatList>
                </View>

                    
                <Text style={{color:'black', marginLeft:20}} >Recent courses</Text>

            
                <FlatList
                data={images}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}></FlatList>


                <View style={{height:230}}>
                <FlatList
                data={person}
                horizontal={true}
                renderItem={RenderClassItem}
                showsHorizontalScrollIndicator={false}></FlatList>
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
    profileButton:{
        height:40,
        width:40,
        backgroundColor:'#fff',
        marginTop:20,
        marginLeft:20,
        borderRadius:10,
        borderColor:'green',
        borderWidth:2
    },
    profileIcon:{
        marginTop:4,
        marginLeft:6,
    },
    inmakesLogo:{
        height:50,
        width:150,
        position:'absolute',
        right:180,
        top:13,
        marginRight:3
    },
    classButton:{
        height:30,
    },
    classContainer:{
        height:30,
        width:95,
        position:'absolute',
        right:45,
        top:20,
        flexDirection:'row',
        borderColor:'green',
        borderWidth:1,
        borderRadius:5

    },
    classText:{
        marginTop:3,
        marginLeft:4,
        color:'green'
    },
    dropTab:{
        height:60,
        width:340,
        backgroundColor:'#1e314a',
        borderRadius:5,
        marginLeft:20,
        marginTop:20
    },
    recentContainer:{
        height:150,
        width:250,
        backgroundColor:'green',
        marginLeft:25,
        flexDirection:'row'
    
    }
})

