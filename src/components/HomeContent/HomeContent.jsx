import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import styles from './HomeContent.styles';
import { getCommunity } from '../../data/supabase';
import { useDispatch } from 'react-redux';
import { CommunityReduxAction } from '../../redux/CommunityRedux';

export default function HomeContent() {
  const [communityData, setCommunityData] = useState([]);
  const [imgCheck, setImgCheck] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  function handleContent(communityId, title, main, userid, imgUrl) {
    dispatch(CommunityReduxAction.communityIdChange(communityId));
    dispatch(CommunityReduxAction.titleChange(title));
    dispatch(CommunityReduxAction.mainChange(main));
    dispatch(CommunityReduxAction.loginIdChange(userid));
    dispatch(CommunityReduxAction.imgUrlChange(imgUrl));
    navigation.navigate('Detail');
  }
  async function loadData() {
    const data = await getCommunity();
    setCommunityData(data);
    // if (data.imageid !== null) {
    //   setImgCheck(true);
    // }
    setImgCheck(data.some(item => item.imageid !== null));
  }
  useEffect(() => {
    if (isFocused) loadData();
  }, [isFocused]);
  return (
    <FlatList
      data={communityData}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.HomeContentWrapper}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.HomeContent}
          onPress={() =>
            handleContent(
              item.id,
              item.title,
              item.main,
              item.userid,
              item.imageid,
            )
          }
          activeOpacity={0.8}
        >
          <View style={styles.TextContent}>
            <Text style={styles.MainText}>
              {item.title.length > 10
                ? item.title.slice(0, 10) + '...'
                : item.title}
            </Text>
            <Text style={styles.SubText}>
              {(() => {
                const firstLine = item.main.split('\n')[0];
                return firstLine.length > 10
                  ? firstLine.slice(0, 10) + '...'
                  : firstLine;
              })()}
            </Text>
            <Text style={styles.CommentText}>댓글 {item.comment}</Text>
          </View>
          <View style={styles.ImageBox}>
            {/* {item.imageid === '' && <View style={styles.NoImage}></View>} */}
            {item.imageid !== '' && (
              <Image style={styles.YesImage} source={{ uri: item.imageid }} />
            )}
          </View>
        </TouchableOpacity>
      )}
      removeClippedSubviews={true}
      windowSize={5}
      initialNumToRender={8}
      maxToRenderPerBatch={8}
    />
  );
}
