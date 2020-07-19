import React from 'react';
import {Text, View, Button, Alert} from 'react-native';

import StorageUtils from '../utils/StorageUtils';

export default MineScreen = (props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="保存数据"
        onPress={() => {
          StorageUtils.setData('key1', '测试数据').then((res) => {
            Alert.alert(res);
          });
        }}
      />
      <Button
        title="删除数据"
        onPress={() => {
          StorageUtils.deleteData('key1').then((res) => {
            Alert.alert(res);
          });
        }}
      />
      <Button
        title="获取数据"
        onPress={() => {
          StorageUtils.getData('key1').then((res) => {
            Alert.alert(res);
          });
        }}
      />
    </View>
  );
};
