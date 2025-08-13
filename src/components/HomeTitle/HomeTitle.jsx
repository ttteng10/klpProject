import React from 'react';
import { Text, View } from 'react-native';
import styles from './HomeTitle.styles';

export default function HomeTitle() {
  return (
    <View style={styles.HomeTitle}>
      <Text style={styles.HomeTitleText}>케이엘피 커뮤니티</Text>
    </View>
  );
}
