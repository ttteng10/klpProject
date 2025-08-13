import { useNavigation } from '@react-navigation/native';
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
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './Write.style';
import StatusBar from '../../components/StatusBar/StatusBar';
import { addCommunity, addCommunityImg } from '../../data/supabase';
import { useSelector } from 'react-redux';

export default function Write() {
  const insets = useSafeAreaInsets();
  let userID = useSelector(state => state.loginCheck.loginId);
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [main, setMain] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const titleRef = useRef();
  const mainRef = useRef();
  async function handleSubmit() {
    if (title === '') {
      titleRef.current.focus();
      return;
    }
    if (main === '') {
      mainRef.current.focus();
      return;
    }
    let imgLink = '';
    if (imgUrl !== '') {
      imgLink = await addCommunityImg(imgUrl, fileName, fileType);
    }
    await addCommunity(title, main, userID, imgLink);

    navigation.navigate('Home');
  }
  function openGallery() {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1, includeBase64: true },
      response => {
        if (response.didCancel) {
          console.log('사용자가 선택을 취소했습니다.');
        } else if (response.errorMessage) {
          console.log('에러:', response.errorMessage);
        } else {
          const asset = response.assets?.[0];
          if (asset) {
            setImgUrl(asset.uri);
            setFileName(asset.fileName);
            setFileType(asset.type);
          }
        }
      },
    );
  }
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
          <View style={styles.WriteWrapper}>
            <Text style={styles.WriteHeader}>글 작성</Text>
            <View style={styles.WriteContent}>
              <View style={styles.TitleWrapper}>
                <TextInput
                  style={styles.TitleInput}
                  ref={titleRef}
                  value={title}
                  onChangeText={setTitle}
                  placeholder="제목을 입력하세요"
                  keyboardType="default"
                />
              </View>
              <View style={styles.MainWrapper}>
                <TextInput
                  style={styles.MainInput}
                  ref={mainRef}
                  value={main}
                  onChangeText={setMain}
                  placeholder="다양한 이야기를 공유해주세요"
                  multiline={true}
                  textAlignVertical="top"
                  keyboardType="default"
                />
              </View>
              {imgUrl !== '' && (
                <View style={styles.ImgUrlWrapper}>
                  <Text style={styles.ImgUrlText}>{imgUrl}</Text>
                </View>
              )}
              <View style={styles.ImgAddWrapper}>
                <TouchableOpacity
                  onPress={openGallery}
                  style={styles.ImgAddBtn}
                >
                  <Text style={styles.ImgText}>이미지 첨부</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.BtnWrapper}>
                <TouchableOpacity
                  style={styles.BtnStyle}
                  onPress={handleSubmit}
                >
                  <Text style={styles.BtnText}>등록</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
