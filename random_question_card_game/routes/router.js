import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/home';
import Card from '../screens/card';

const Tab = createMaterialTopTabNavigator();

const RouterTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Card" component={Card} />
    </Tab.Navigator>
  );
};

export default RouterTabs;
