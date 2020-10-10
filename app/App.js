import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ListScreen from "./src/Screens/ListScreen";
import Semesters from "./src/Screens/Semesters";
import First from "./src/Screens/First";
import Second from "./src/Screens/Second";
import Third from "./src/Screens/Third";
import Profile from './src/Screens/Profile';

const stack = createStackNavigator();

function app(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="List" component={ListScreen}/>
        <stack.Screen name="Semesters" component={Semesters}/>
        <stack.Screen name="First" component={First}/>
        <stack.Screen name="Second" component={Second}/>
        <stack.Screen name="Third" component={Third}/>
        <stack.Screen name="Profile" component={Profile}/>
        
      </stack.Navigator>
    </NavigationContainer>
  )

}

export default app;



