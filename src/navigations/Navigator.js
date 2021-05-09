import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';
import OTP from '../screens/Otp';
import Welcome from '../screens/Welcome'
const Stack = createStackNavigator();

const screenOptionStyle ={
    headerShown : false
}
const HomeStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            <Stack.Screen 
                name="OTP"
                component={OTP}
            />
             <Stack.Screen 
                name="Welcome"
                component={Welcome}
            />
        </Stack.Navigator>
    )
}


export default HomeStackNavigator;
