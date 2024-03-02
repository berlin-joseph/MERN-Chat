import React, {useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Appearance} from 'react-native';

const CustomStatusBarColor = ({backgroundColor, barStyle}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default function CustomStatusBar() {
  return (
    <>
      <CustomStatusBarColor
        backgroundColor={'#704BFF'}
        barStyle={'light-content'}
      />
    </>
  );
}

const styles = StyleSheet.create({});
