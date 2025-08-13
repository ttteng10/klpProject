import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './Home.styles';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import HomeContent from '../../components/HomeContent/HomeContent';
import StatusBar from '../../components/StatusBar/StatusBar';

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[
        styles.HomeWrapper,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.ViewWrapper}>
        <HomeTitle />
        <StatusBar back={false} />
        <HomeContent />
      </View>
    </SafeAreaView>
  );
}
