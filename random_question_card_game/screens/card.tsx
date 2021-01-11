import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import data from '../data/question(en).json';

export default function Card() {
  const [questions, setQuestions] = useState('');

  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <View style={styles.Cotainer}>
      <View style={styles.TheCard}>
        <View styles={styles.TheBack}>{/* HearOutlined? */}</View>

        <View styles={styles.TheFront}>
          <Text>{questions.id}/100</Text>
          <Text>{questions.text}?</Text>
          <Button title="Next" color="red" onPress={getQuestion} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /*
  const Container = styled.div`
  width: 250px;
  height: 320px;
  display: block;
  margin: 0px auto;
`;

const TheCard = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const TheBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.danger};
  border-radius: 10px;
`;

const TheFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 5px;
  border-radius: 10px;
  border-style: double;
  border-color: black;
  backface-visibility: hidden;
  overflow: hidden;
  background: white;
  text-align: center;
  transform: rotateY(180deg);
`;

const Text = styled.h3`
  vertical-align: middle;
  text-align: center;
  border-radius: 10px;
  color: white;
  padding: 10px;
  margin: 15px;
  height: 180px;
  background-color: ${(props) => props.theme.colors.danger};
`;

const StyledButton = styled(Button)`
  position: absolute;
`;
*/
});
