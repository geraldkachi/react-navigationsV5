import "react-native-gesture-handler"
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import RoutesTab from "./navigation/RoutesTab"

import {DrawerContent} from "./navigation/DrawerContent"
import SupportScreen from "./screens/SupportScreen"
import SettingsScreen from "./screens/SettingsScreen"
import BookmarkScreen from "./screens/BookmarkScreen"
import ProfileScreen from "./screens/ProfileScreen"

// import {HomeStackScreen,DetailStackScreen } from "./navigation/RoutesTab"


const Drawer = createDrawerNavigator() 



// const position = pos == "right"?"left":"right";


const App = () => {
    return (
        <NavigationContainer >
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  >
                <Drawer.Screen name="HomeDrawer" component={RoutesTab}  />
                <Drawer.Screen name="SupportScreen" component={SupportScreen}  />
                <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> 
                <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> 
                <Drawer.Screen name="ProfileScreen" component={ProfileScreen} /> 
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})



    // <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen}/>
    //     <Drawer.Screen name="Detail" component={DetailScreen} />
    // </Drawer.Navigator> 


                    //////////////////////////////////////////////
                
                    

                    // const Stack = createStackNavigator()
                    // const Drawer = createDrawerNavigator() 
                    
                    
                    //     const createHomeStack = ({navigation}) => 
                    //     <Stack.Navigator screenOptions={{
                    //         headerStyle:{backgroundColor:"#009387"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"} 
                    //     }}>
                    //         <Stack.Screen name="Home" component={HomeScreen} 
                    //         options={{ title:"HomeScreen",
                    //          headerLeft:()=> ( <Button title="Menu" onPress={()=> navigation.openDrawer() }/>)
                    //          }} />
                    //         <Stack.Screen name="Detail" component={DetailScreen} />
                    //     </Stack.Navigator>
                    
                    // const App = () => {
                    //     return (
                    //         <NavigationContainer >
                    //             <Drawer.Navigator screenOptions={{
                    //                 headerStyle:{backgroundColor:"#009387"}, headerTintColor:"#fff", headerTitleStyle:{fontWeight:"bold"} 
                    //             }}>
                    //                 <Drawer.Screen name="Home" component={createHomeStack} 
                    //                 options={{ title:"OverView" }} />
                    //                 <Drawer.Screen name="Detail" component={DetailScreen} />
                    //             </Drawer.Navigator>
                    //         </NavigationContainer>
                    //     )
                    // }

