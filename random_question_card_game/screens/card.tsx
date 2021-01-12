import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import data from '../data/question(en).json';
import {QuestionsProps} from '../data/Interfaces';

const Card = () => {
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
      <View>
        <Text>{questions.id}/100</Text>
        <Text>{questions.text}?</Text>
        <Button title="Next" color="red" onPress={getQuestion} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Card;
