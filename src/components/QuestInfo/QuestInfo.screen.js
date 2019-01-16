import React, { Component } from 'react';
import { Text, WebView } from 'react-native';
import Header from '../../modules/Header/Header.screen';

export class QuestInfo extends Component {
  static navigationOptions = (props) => {
    return {
      header: <Header {...props} />
    };
  };
  render() {
    return (
      <WebView
        source={{uri: 'http://10.0.2.2:3000'}}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        thirdPartyCookiesEnabled
      />
    )
  }
}

export default QuestInfo