import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default Welcome = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Main');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WELCOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38b48b',
  },
  text: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
