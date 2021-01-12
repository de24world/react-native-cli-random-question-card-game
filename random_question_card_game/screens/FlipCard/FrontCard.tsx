import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';

const FrontCard = () => {
  return (
    <View>
      <Card style={styles.card}>
        <Text>Front Card</Text>
      </Card>
    </View>
  );
};

export default FrontCard;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    borderWidth: 5,
    borderRadius: 10,
  },
});
