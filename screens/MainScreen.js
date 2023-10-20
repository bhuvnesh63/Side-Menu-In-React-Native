import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
    MaterialIcons,
    MaterialCommunityIcons, FontAwesome
}
    from '@expo/vector-icons';
import { createDrawerNavigator }
    from '@react-navigation/drawer';
import { createNativeStackNavigator }
    from '@react-navigation/native-stack';
import Categories from './Categories';
import Settings from './Settings';
import GetPremium from './GetPremium';
import RateApp from './RateApp';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Profile from '../components/Profile';
import Home from './Home';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainScreen = () => {



    return (
        <Drawer.Navigator
            drawerContent={(props) => 
            <Profile {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#fff",
                    width: 250,
                },
                headerStyle: {
                    backgroundColor: "#033E3E",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                drawerActiveTintColor: "blue",
                drawerLabelStyle: {
                    color: "#111",
                },
            }}
        >

            <Drawer.Screen
                name="Home"
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    drawerIcon: () => (
                        < MaterialIcons 
                        name='home' 
                        size={20} 
                        color="#808080" />
                    ),
                }}
                component={Home}
            />


            <Drawer.Screen
                name="Categories"
                options={{
                    drawerLabel: "Categories",
                    title: "Categories",
                    drawerIcon: () => (
                        <MaterialIcons 
                        name='category' 
                        size={20} 
                        color="#808080" />
                    ),
                }}
                component={Categories}
            />

            <Drawer.Screen
                name="Settings"
                options={{
                    drawerLabel: "Settings",
                    title: "Settings",
                    drawerIcon: () => (
                        <MaterialIcons 
                        name='settings' 
                        size={20} 
                        color="#808080" />
                    ),
                }}
                component={Settings}
            />
            <Drawer.Screen
                name="Get Premium"
                options={{
                    drawerLabel: "Get Premium",
                    title: "Get Premium",
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                        name='certificate' 
                        size={20} 
                        color="#808080" />
                    ),
                }}
                component={GetPremium}
            />
            <Drawer.Screen
                name="Rate this App"
                options={{
                    drawerLabel: "Rate this App",
                    title: "Rate this App",
                    drawerIcon: () => (
                        <FontAwesome 
                        name='star' 
                        size={20} 
                        color="#808080" />
                    ),
                }}
                component={RateApp}
            />
            <Drawer.Screen
                name="Contact Us"
                options={{
                    drawerLabel: "Contact Us",
                    title: "Contact Us",
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                        name='message-alert-outline' 
                        size={20} 
                        color="#808080" />
                    ),
                }}
                component={Contact}
            />
            <Drawer.Screen
                name="Dashboard"
                options={{
                    drawerLabel: "Dashboard",
                    title: "Dashboard",
                    drawerIcon: () => (
                        <MaterialCommunityIcons 
                        name='message-alert-outline' 
                        size={20} 
                        color="#808080" />
                    ),
                }}
                component={Dashboard}
            />

        </Drawer.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({})