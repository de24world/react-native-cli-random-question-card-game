import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FlipCard from './Cardgame/FlipCard';

import {Button, Card, Title} from 'react-native-paper';
import FrontCard from './FlipCard/FrontCard';
import BackCard from './FlipCard/BackCard';

const CardGame: React.FC = () => {
  return (
    <View>
      <Title>CardGame</Title>
      <FrontCard />
      <BackCard />
    </View>
  );
};

export default CardGame;

const styles = StyleSheet.create({});
