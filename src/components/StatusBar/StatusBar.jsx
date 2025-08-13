import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './StatusBar.styles';
import arrowBackIcon from '../../assets/icons/arrow_back.png';
import noteAddIcon from '../../assets/icons/note_add.png';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import UserModal from '../UserModal/UserModal';
import WriteWarnModal from '../WriteWarnModal/WriteWarnModal';

export default function StatusBar({ back }) {
  let loginCheck = useSelector(state => state.loginCheck.loginState);
  let userID = useSelector(state => state.loginCheck.loginId);
  const [modalVisible, setModalVisible] = useState(false);
  const [warnModalVisible, setWarnModalVisible] = useState(false);
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  function handleUser() {
    if (loginCheck) {
      setModalVisible(true);
    } else {
      navigation.navigate('Login');
    }
  }
  function handleWrite() {
    if (loginCheck) {
      navigation.navigate('Write');
    } else {
      setWarnModalVisible(true);
    }
  }
  return (
    <View style={styles.StatusBar}>
      {back && (
        <TouchableOpacity onPress={handleBack} style={styles.IconWrapper}>
          <Image source={arrowBackIcon} style={styles.IconStyle} />
        </TouchableOpacity>
      )}
      {!back && (
        <TouchableOpacity onPress={handleWrite} style={styles.IconWrapper}>
          <Image source={noteAddIcon} style={styles.IconStyle} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleUser} style={styles.UserWrapper}>
        {!loginCheck && <Text style={styles.UserNick}>로그인</Text>}
        {loginCheck && (
          <Text style={styles.UserNick}>
            {userID.length > 6 ? userID.slice(0, 6) + '...' : userID}
          </Text>
        )}
      </TouchableOpacity>
      <UserModal
        isModalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <WriteWarnModal
        isModalVisible={warnModalVisible}
        setModalVisible={setWarnModalVisible}
      />
    </View>
  );
}
