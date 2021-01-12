import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, Card, Title} from 'react-native-paper';

import data from '../../data/question(en).json';
import {QuestionsProps} from '../../data/Interfaces';

const FlipCard = () => {
  const [questions, setQuestions] = useState(data);

  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Title>Flip</Title>

        <View></View>

        <View>
          <Card style={styles.card}>
            <Text>{questions.id}/100</Text>
            <Text>{questions.text}?</Text>
            <Button mode="contained" onPress={getQuestion}>
              Next
            </Button>
          </Card>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 300,
    height: 500,
    borderWidth: 5,
    borderRadius: 10,
  },
});

export default FlipCard;
