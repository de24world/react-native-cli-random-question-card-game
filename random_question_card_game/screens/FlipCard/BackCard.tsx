import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, Card, Title} from 'react-native-paper';

import data from '../../data/question(en).json';
import {QuestionsProps} from '../../data/Interfaces';

const BackCard = () => {
  const [questions, setQuestions] = useState(data);

  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <View>
      <Card style={styles.card}>
        <Text>{questions.id}/100</Text>
        <Text>{questions.text}?</Text>
        <Button mode="contained" onPress={getQuestion}>
          Next
        </Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    borderWidth: 5,
    borderRadius: 10,
  },
});

export default BackCard;
