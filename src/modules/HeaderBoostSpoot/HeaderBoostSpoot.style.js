import { StyleSheet, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');
import { font } from '../../utils/static';

import Color from '../../utils/color';
import { config, HEADER } from '../../utils/constants';

const { IOS } = config.PLATFORM;

const { OS } = Platform;

export default StyleSheet.create({
  containerWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    backgroundColor: '#EE3124'
  },
  container: {
    height: height,
    paddingTop: 0
  },
  custom: {
    flexDirection: 'row'
  },
  iconMenu: {
    color: '#FFFFFF',
    paddingLeft: 16
  },
  backContainer: {
    justifyContent: 'center',
    paddingRight: 20
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'ProximaNova-Semibold'
  },
  map: {
    height: 24,
    width: 24
  },
  containerMap: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  scrollTitle: {
    alignSelf: 'center'
  }
});
