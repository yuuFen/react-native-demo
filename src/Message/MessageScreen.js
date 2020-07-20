import React from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {updateMessage} from './action';
import {APIS, APP} from '../constants/API';
import {fetchGet} from '../util/httpTool';

const MessageScreen = ({page, messageList, updateMessage}) => {
  //http://m.app.haosou.com/index/getData?type=1&page=1
  const fetchMessage = (curPage) => {
    const requestParam = {
      ...APP,
      page: curPage,
    };
    fetchGet({
      serviceType: APIS.ServiceInit,
      params: requestParam,
      success: (response) => {
        if (curPage === 1) {
          // const {setMessage} = this.props;
          // setMessage({
          //   list: response.list,
          //   page: curPage,
          // });
          // this.setState({
          //   isLoading: false,
          //   // messageList: response.list,
          //   isRefesh: false,
          //   // page: curPage
          // });
        } else {
          // const {updateMessageList} = this.props;
          // updateMessageList({
          //   page: curPage,
          //   list: this.props.messageList.concat(response.list),
          // });
          // this.setState({
          //   isLoading: false,
          //   // page: curPage,
          //   showFoot: 0,
          //   // messageList: this.state.messageList.concat(response.list)
          // });
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

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
