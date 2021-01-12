import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlipCard from './Cardgame/FlipCard';

import {Button, Card, Title} from 'react-native-paper';

const CardGame: React.FC = () => {
  return (
    <View>
      <Title>CardGame</Title>
      <FlipCard />
      <FlipCard />
    </View>
  );
};

export default CardGame;

const styles = StyleSheet.create({});
