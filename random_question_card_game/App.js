import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RouterTabs from './routes/router';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={{flex: 1}}>
        <RouterTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
