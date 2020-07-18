import React from 'react';
import {Text, View, Button} from 'react-native';

export default CompanyScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Company</Text>
      <Button
        title="to Detail"
        onPress={() => {
          props.navigation.navigate('CompanyDetail');
        }}
      />
    </View>
  );
};
