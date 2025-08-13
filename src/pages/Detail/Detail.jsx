import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './Detail.styles';
import StatusBar from '../../components/StatusBar/StatusBar';
import { useSelector } from 'react-redux';
import WriteWarnModal from '../../components/WriteWarnModal/WriteWarnModal';
import { addComment, getComment, updateComment } from '../../data/supabase';

export default function Detail() {
  const insets = useSafeAreaInsets();
  let communityId = useSelector(state => state.communityData.communityId);
  let userId = useSelector(state => state.communityData.loginId);
  let title = useSelector(state => state.communityData.title);
  let main = useSelector(state => state.communityData.main);
  let imageCheck = useSelector(state => state.communityData.imgUrl);
  let loginCheck = useSelector(state => state.loginCheck.loginState);
  let loginId = useSelector(state => state.loginCheck.loginId);
  const [comment, setComment] = useState('');
  const [commentData, setCommentData] = useState([]);
  const [warnModalVisible, setWarnModalVisible] = useState(false);
  const inputRef = useRef();
  async function loadComment() {
    const data = await getComment(communityId);
    setCommentData(data);
  }

  async function handleSubmit() {
    if (!loginCheck) {
      setWarnModalVisible(true);
      return;
    }
    if (comment === '') {
      inputRef.current.focus();
      return;
    }

    await addComment(communityId, loginId, comment);
    await updateComment(communityId);
    setComment('');

    await loadComment();
    Keyboard.dismiss();
  }

  useEffect(() => {
    loadComment();
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top : 0}
        >
          <View style={styles.DetailWrapper}>
            <StatusBar back={true} />
            <View style={styles.ContentWrapper}>
              <Text style={styles.NickText}>작성자 : {userId}</Text>
              <Text style={styles.TitleText}>{title}</Text>
              <Text style={styles.MainText}>{main}</Text>
              {imageCheck !== '' && (
                <View style={styles.ImgWrapper}>
                  <Image
                    source={{ uri: imageCheck }}
                    style={styles.ImageStyle}
                  />
                </View>
              )}
            </View>
            <View style={styles.CommentWrapper}>
              <View style={styles.CommentHeader}>
                <Text style={styles.CommentHeaderText}>댓글</Text>
              </View>
              <FlatList
                data={commentData}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.CommentWrapper}
                renderItem={({ item }) => (
                  <View style={styles.Comment} key={item.id}>
                    <Text style={styles.CommentUser}>{item.userid}</Text>
                    <Text style={styles.CommentText}>{item.comment}</Text>
                  </View>
                )}
              />
            </View>
            <View style={styles.InputWrapper}>
              <TextInput
                style={styles.InputStyle}
                value={comment}
                ref={inputRef}
                onChangeText={setComment}
                placeholder="여기에 입력하세요"
              />
              <TouchableOpacity style={styles.SubmitBtn} onPress={handleSubmit}>
                <Text>등록</Text>
              </TouchableOpacity>
            </View>
          </View>
          <WriteWarnModal
            isModalVisible={warnModalVisible}
            setModalVisible={setWarnModalVisible}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
