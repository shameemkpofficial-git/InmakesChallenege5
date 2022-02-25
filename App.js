import React from "react";
import Register from "./src/Register";
import Otp from "./src/Otp";
import SchoolBoard from "./src/SchoolBoard";
import Details from "./src/Details";
import AppTour from "./src/AppTour";
import Biology from "./src/Biology";

// Bottom-Tab-Pages// 
import Contact from "./src/BottomTab/contact";
import Exam from "./src/BottomTab/exams";
import Profile from "./src/BottomTab/profile";
import Recent from "./src/BottomTab/recent";
import Home from "./src/Home";

// Top Tab//
import Videos from "./src/TopTab/Videos";




import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import Home from "./src/Home";


import  Entypo  from "react-native-vector-icons/Entypo";
import  Octicons from "react-native-vector-icons/Octicons";
import { StyleSheet, View } from "react-native";


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const TopTab = createMaterialTopTabNavigator()


import DrawerContent from "./src/DrawerContent";
function ExamCorner(){
    return(
        <>
        </>
    )
}

function Subscription(){
    return(
        <>
        </>
    )
}

function Analatics(){
    return(
        <>
        </>
    )
}

function ChapterTest(){
    return(
        <>
        </>
    )
}

function Ressource(){
    return(
        <>
        </>
    )
}
function QNBank(){
    return(
        <>
        </>
    )
}

function MyStack(){
    return(
     <Stack.Navigator>
         <Stack.Screen
         name='Register'
         component={Register}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen
         name='Otp'
         component={Otp}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen
         name='Details'
         component={Details}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen name='SchoolBoard'
         component={SchoolBoard}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen name='AppTour'
         component={AppTour}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen
         name='Home'
         component={Home}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen
         name='Biology'
         component={Biology}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen
         name='MyBottomTab'
         component={MyBottomTab}
         options= {{headerShown:false}}></Stack.Screen>

         <Stack.Screen
         name='MyDrawer'
         component={MyDrawer}
         options={{headerShown:false}}></Stack.Screen>

         <Stack.Screen
         name='MyTopTab'
         component={MyTopTab}
         options= {{headerShown:false}}></Stack.Screen>
     </Stack.Navigator>
  

    )
}


function MyTopTab(){
    return(
        <TopTab.Navigator>
            <TopTab.Screen 
            name='Videos'
            component={Videos}
            options= {{headerShown:false}}>

            </TopTab.Screen>
            <TopTab.Screen 
            name='ChapterTest'
            component={ChapterTest}
            options= {{headerShown:false}}>

            </TopTab.Screen>

            <TopTab.Screen 
            name='Ressource'
            component={Ressource}
            options= {{headerShown:false}}>

            </TopTab.Screen>


            <TopTab.Screen 
            name='QN BAnk'
            component={QNBank}
            options= {{headerShown:false}}>

            </TopTab.Screen>
        </TopTab.Navigator>
    )
}


function MyBottomTab(){
    return(
        <BottomTab.Navigator
        screenOptions={{
            tabBarLabelStyle: {fontsize:12},
            tabBarItemStyle: {width:50},
            tabBarStyle: {backgroundColor:'#fff'}
        }}>
            <BottomTab.Screen
            name='Home'
            component={Home}
            options={{headerShown:false,
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'green',
                tabBarIcon:({focused})=>
                focused ? <Entypo name='home' size={24} color='green'></Entypo> : <Entypo name='home' size={24} color='black'></Entypo>
            }}>

            </BottomTab.Screen>

            <BottomTab.Screen
            name='Recent'
            component={Recent}
            options={{headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused ? <Entypo name='controller-play' size={24} color='green'></Entypo> : <Entypo name='controller-play' size={24} color='black'></Entypo>
            }}></BottomTab.Screen>

            <BottomTab.Screen
            name='Exam'
            component={Exam}
            options={{headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused ? <Entypo name='spreadsheet' size={24} color='green'></Entypo> : <Entypo name='spreadsheet' size={24} color='black'></Entypo>
            }}></BottomTab.Screen>

            <BottomTab.Screen
            name='Profile'
            component={Profile}
            options={{headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'black',
                
                tabBarIcon:({focused})=>
                focused ? <Octicons name='person' size={24} color='green'></Octicons> : <Octicons name='person' size={24} color='black'></Octicons>
            }}></BottomTab.Screen>

            <BottomTab.Screen
            name='Contact'
            component={Contact}
            options={{
                headerShown:false,
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'black',
                tabBarIcon:({focused})=>
                focused ? <Entypo name='newsletter' size={24} color='green'></Entypo> : <Entypo name='newsletter' size={24} color='black'></Entypo>
            }}></BottomTab.Screen>


            

        </BottomTab.Navigator>
    )
}




function MyDrawer(){
    return(
        <Drawer.Navigator
        drawerContent= {(props)=> <DrawerContent {...props}></DrawerContent>}>
            <Drawer.Screen
            name='ExamCorner'
            component={ExamCorner}
            options={{
                drawerActiveBackgroundColor:'red'
            }}></Drawer.Screen>

            <Drawer.Screen
            name='Subscription'
            component={Subscription}
            ></Drawer.Screen>

            <Drawer.Screen
            name='Analatics'
            component={Analatics}></Drawer.Screen> 

           </Drawer.Navigator>
              
    )
}





export default function App(){
    return(
     <NavigationContainer>
         <MyStack />

    
     </NavigationContainer>
    )

}

const styles = StyleSheet.create({
    bottomTabContainer:{
        // height
    }
})