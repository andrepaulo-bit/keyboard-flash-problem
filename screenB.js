import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

const ScreenB = ({navigation}) => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>TestB</Text>
      <TextInput style={styles.input} />
    </SafeAreaView>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    margin: 30,
  },
});
