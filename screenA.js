import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const ScreenA = ({navigation}) => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>TestA</Text>
      <Button
        title="teste"
        onPress={() => {
          navigation.navigate('ScreenB');
        }}
      />
    </SafeAreaView>
  );
};

export default ScreenA;

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
