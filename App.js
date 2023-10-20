import React from 'react';
import { NavigationContainer }
  from '@react-navigation/native';
import { createNativeStackNavigator }
  from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import MainScreen from './screens/MainScreen';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName='Welcome'>
        <stack.Screen
          name='Home'
          component={Welcome}
          options={{ headerShown: false }} />



        <stack.Screen
          name='MainScreen'
          component={MainScreen}
          options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
