import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    maxWidth: '100%'
  },
  imageVoucher: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    width: 90,
    justifyContent: 'space-between',
    borderWidth: 1
  },
  titleButton: {
    marginRight: 10,
    color: 'white'
  },
  icon: {
    color: 'white'
  },
  iconButton: {
    color: 'red'
  },
  textButton: {
    fontSize: 15,
    marginLeft: 8,
    marginRight: 8
  }
});
