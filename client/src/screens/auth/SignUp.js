import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import axios from 'axios';
import {openBrowser} from '@swan-io/react-native-browser';
import {base_url} from '../../constants/url';

const SignUp = ({navigation}) => {
  const login = useCallback(() => {
    openBrowser(
      `${base_url}/auth/google/`,
      axios
        .get(`${base_url}/auth/google/`)
        .then(res => {
          if (res.status === 200) {
            navigation.navigate('Chat');
          }
        })
        .catch(err => console.log(err)),
    );
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={login}>
        <AntDesign name="google" size={responsiveScreenWidth(10)} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
