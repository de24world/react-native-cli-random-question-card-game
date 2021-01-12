import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/home';
import CardGame from '../screens/CardGame';

const Tab = createMaterialTopTabNavigator();

const RouterTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CardGame" component={CardGame} />
    </Tab.Navigator>
  );
};

export default RouterTabs;
