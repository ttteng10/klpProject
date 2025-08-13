import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  StatusBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  IconWrapper: {
    width: 30,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconStyle: {
    width: 25,
    height: 25,
  },
  UserWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  UserNick: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
