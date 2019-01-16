import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { BoxShadow } from 'react-native-shadow';
import { Icon } from 'native-base';

import styles from './HeaderBoostSpoot.style';

const { width } = Dimensions.get('window');


const getShadowOpt = title => ({
  width,
  height: 56, // HEADER.HEIGHT
  color: '#00000', // Color.black
  border: 0, // 2
  radius: 5,
  opacity: 0, // 0.2
  x: 0,
  y: 0 // 4
});

const DefaultHeader = ({
  title, navigation, map, backgroundColor
}) => {
  const goBack = () => () => {
    navigation.dispatch({ type: 'Navigation/BACK' });
  };
  const getBackgroundColor = () => {
    return {
      backgroundColor
    };
  };
  return (
    <BoxShadow setting={getShadowOpt(title)}>
      <View style={[styles.containerWraper, backgroundColor ? getBackgroundColor() : null]}>
        <View style={[styles.container, styles.custom]}>
          <TouchableOpacity onPress={goBack()} style={styles.backContainer}>
            <Icon name="md-arrow-back" style={styles.iconMenu} />
          </TouchableOpacity>
          <View style={styles.containerTitle}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollTitle}>
              <Text style={styles.title}>{title}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </BoxShadow>
  );
};

export default DefaultHeader;

DefaultHeader.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
    setParams: PropTypes.func,
    push: PropTypes.func
  }).isRequired,
  map: PropTypes.bool,
  backgroundColor: PropTypes.string
};
