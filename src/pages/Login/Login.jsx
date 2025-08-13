import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './Login.style';
import StatusBar from '../../components/StatusBar/StatusBar';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const state = navigation.getState();
  const previousRoute = state.routes[state.routes.length - 2]?.name;
  const uri = previousRoute === 'AddUser' ? 'Home' : 'Back';
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
          <StatusBar back={true} />
          <LoginComponent
            header={'케이엘피 커뮤니티'}
            loginError={true}
            btn1={'회원가입'}
            btn1Nav={'AddUser'}
            btn2={'로그인'}
            btn2Nav={uri}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
