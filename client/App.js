import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/routes/Routes';
import CustomStatusBar from './src/components/CustomStatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar />
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
