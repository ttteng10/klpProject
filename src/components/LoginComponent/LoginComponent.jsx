import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginComponent.styles';
import { addUserDB, loginUserDB } from '../../data/supabase';
import { useDispatch } from 'react-redux';
import { LoginReduxAction } from '../../redux/LoginRedux';

export default function LoginComponent({
  header,
  loginError,
  btn1,
  btn1Nav,
  btn2,
  btn2Nav,
}) {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [loginCheck, setLoginCheck] = useState(false);
  const [existCheck, setExistCheck] = useState(false);
  const idRef = useRef();
  const pwRef = useRef();
  const dispatch = useDispatch();
  function handleBtn1() {
    if (btn1Nav === 'Back') {
      navigation.goBack();
    } else {
      navigation.navigate(btn1Nav);
    }
  }
  async function handleBtn2() {
    if (id === '') {
      idRef.current.focus();
      return;
    }
    if (pw === '') {
      pwRef.current.focus();
      return;
    }
    //회원가입일때
    if (header === '회원가입') {
      const data = await addUserDB(id, pw);
      if (data === 'exist') {
        setExistCheck(true);
        return;
      }
      if (btn2Nav === 'Back') {
        navigation.goBack();
      } else {
        navigation.navigate(btn2Nav);
      }
    } else {
      //로그인할때
      const result = await loginUserDB(id, pw);
      if (result === 'fail') {
        setLoginCheck(true);
        return;
      }
      dispatch(LoginReduxAction.loginStateChange(true));
      dispatch(LoginReduxAction.loginIdChange(id));
      if (btn2Nav === 'Back') {
        navigation.goBack();
      } else {
        navigation.navigate(btn2Nav);
      }
    }
  }
  return (
    <View style={styles.LoginWrapper}>
      <Text style={styles.LoginHeader}>{header}</Text>
      <View style={styles.IdWrapper}>
        <Text style={styles.IdLabel}>ID</Text>
        <TextInput
          style={styles.IdInput}
          ref={idRef}
          value={id}
          onChangeText={setId}
          placeholder="아이디 입력하세요"
        />
      </View>
      <View style={styles.PwWrapper}>
        <Text style={styles.PwLabel}>PW</Text>
        <TextInput
          style={styles.PwInput}
          ref={pwRef}
          value={pw}
          onChangeText={setPw}
          placeholder="비밀번호 입력하세요"
          secureTextEntry={true}
        />
      </View>
      {loginError && (
        <View style={styles.LoginCheck}>
          {loginCheck && (
            <Text style={styles.LoginCheckText}>
              로그인 정보가 올바르지 않습니다.
            </Text>
          )}
        </View>
      )}
      {!loginError && (
        <View style={styles.LoginCheck}>
          {existCheck && (
            <Text style={styles.LoginCheckText}>
              이미 존재하는 아이디 입니다.
            </Text>
          )}
        </View>
      )}
      <View style={styles.BtnWrapper}>
        <TouchableOpacity style={styles.AddUserBtn} onPress={handleBtn1}>
          <Text style={styles.AddUserText}>{btn1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginUserBtn} onPress={handleBtn2}>
          <Text style={styles.LoginUserText}>{btn2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
