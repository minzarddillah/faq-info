import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  superContainer: {
    flex: 1
  },
  container: {
    margin: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subTitle: {
    marginTop: 5,
    marginBottom: 20
  },
  containerFooter: {
    height: 50,
    backgroundColor: 'red'
  },
  footer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'    
  },
  textCheckout: {
    color: 'white'
  },
  textButtonCheckout: {
    color: 'white',
    fontWeight: 'bold'
  }
});
