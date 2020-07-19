import React from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {updateMessage} from './action';

const MessageScreen = ({page, messageList, updateMessage}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        {'page ' + page + messageList.map((item) => '\n' + item.title)}
      </Text>
      <Button
        title="action"
        onPress={() => {
          updateMessage({
            page: (page += 1),
            list: [...messageList, {title: 'title ' + page}],
          });
        }}
      />
    </View>
  );
};

export default connect(
  (state) => ({
    page: state.message.page,
    messageList: state.message.list,
  }),
  {updateMessage},
)(MessageScreen);
