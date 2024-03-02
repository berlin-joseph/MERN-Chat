import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const HeaderNavigation = ({title, url}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack('')}>
        <View style={styles.LeftView}>
          <View style={styles.ImageView}>
            <Ionicons
              name={'chevron-back-sharp'}
              color={'white'}
              size={responsiveScreenWidth(10)}
            />
          </View>
          {title ? <Text style={styles.LeftText}>{title}</Text> : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
  LeftView: {flexDirection: 'row', alignItems: 'center'},
  LeftText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveScreenWidth(0.5),
  },
});
