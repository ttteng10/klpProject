import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  LoginWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: 10,
    marginTop: 150,
  },
  LoginHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  IdWrapper: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  IdLabel: {
    width: '20%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  IdInput: {
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    paddingLeft: 5,
  },
  PwWrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  PwLabel: {
    width: '20%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  PwInput: {
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    paddingLeft: 5,
  },
  LoginCheck: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginCheckText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'red',
  },
  BtnWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  AddUserBtn: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddUserText: {
    fontSize: 15,
    fontWeight: '500',
  },
  LoginUserBtn: {
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e2e2e2',
    backgroundColor: '#e2e2e2',
  },
  LoginUserText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
