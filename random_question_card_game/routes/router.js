import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/home';
import FlipCard from '../screens/FlipCard';

const Tab = createMaterialTopTabNavigator();

const RouterTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="FlipCard" component={FlipCard} />
    </Tab.Navigator>
  );
};

export default RouterTabs;
