import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ScreenC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>TestC</Text>
    </SafeAreaView>
  );
};

export default ScreenC;

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
});
