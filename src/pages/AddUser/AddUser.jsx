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
import StatusBar from '../../components/StatusBar/StatusBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from './AddUser.styles';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

export default function AddUser() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const idRef = useRef();
  const pwRef = useRef();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: 'white',
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <StatusBar back={false} />
          <LoginComponent
            header={'회원가입'}
            loginError={false}
            btn1={'취소'}
            btn1Nav={'Back'}
            btn2={'회원가입'}
            btn2Nav={'Login'}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
