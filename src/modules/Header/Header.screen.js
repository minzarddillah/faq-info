import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import styles from './Header.style';


function Header(props) {
  return (
    <View>
      <View style={styles.iconLeftMenuContainer}>
        <TouchableOpacity onPress={() => {
          props.navigation.goBack();
        }}>
          <Icon name="md-arrow-back" style={styles.iconLeftMenu} />
        </TouchableOpacity>
        <Text style={styles.title}>
          BoostPreneur Quest{'\n'}Info
        </Text>
      </View>
      <Image
        source={require('../../img/bg_boostinfo.png')}
        style={styles.headerImage}
        resizeMode="cover"
      />
    </View>
  );
}

export default Header