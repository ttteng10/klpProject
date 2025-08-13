import React from 'react';
import Modal from 'react-native-modal';
import styles from './WriteWarnModal.style';
import { Text, TouchableOpacity, View } from 'react-native';

export default function WriteWarnModal({ isModalVisible, setModalVisible }) {
  function handleCancel() {
    setModalVisible(false);
  }
  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.ModalContent}>
        <Text style={styles.ModalText}>글쓰기는 회원 전용입니다</Text>
        <View style={styles.ModalBtns}>
          <TouchableOpacity style={styles.LogoutBtn} onPress={handleCancel}>
            <Text style={styles.LogoutBtnText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
