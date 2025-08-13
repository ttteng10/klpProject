import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ModalContent: {
    width: '100%',
    height: '30%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    gap: 30,
  },
  ModalText: {
    fontSize: 20,
    fontWeight: '500',
  },
  ModalBtns: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoutBtn: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e2e2e2',
    backgroundColor: '#e2e2e2',
  },
  LogoutBtnText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
