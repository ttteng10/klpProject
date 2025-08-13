import React from 'react';
import Modal from 'react-native-modal';
import styles from './UserModal.styles';
import { useSelector, useDispatch } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { LoginReduxAction } from '../../redux/LoginRedux';

export default function UserModal({ isModalVisible, setModalVisible }) {
  const dispatch = useDispatch();
  let userID = useSelector(state => state.loginCheck.loginId);
  function handleCancel() {
    setModalVisible(false);
  }
  function handleLogout() {
    dispatch(LoginReduxAction.loginStateChange(false));
    dispatch(LoginReduxAction.loginIdChange(''));
    setModalVisible(false);
  }
  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.ModalContent}>
        <Text style={styles.ModalText}>{userID} 님 로그아웃하시겠습니까?</Text>
        <View style={styles.ModalBtns}>
          <TouchableOpacity style={styles.CancelBtn} onPress={handleCancel}>
            <Text style={styles.CancelBtnText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LogoutBtn} onPress={handleLogout}>
            <Text style={styles.LogoutBtnText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
