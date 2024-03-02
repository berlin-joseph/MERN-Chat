import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const ChatHeader = item => {
  return (
    <View
      onPress={() => navigation.navigate('Chat', {item})}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveScreenWidth(2),
        paddingHorizontal: responsiveScreenWidth(3),
      }}>
      <Image
        source={require('../assets/avatar.png')}
        style={{
          height: responsiveScreenWidth(10),
          width: responsiveScreenWidth(10),
          borderRadius: responsiveScreenWidth(10),
        }}
      />
      <View
        style={{
          marginLeft: responsiveScreenWidth(2),
          gap: 5,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            fontSize: responsiveFontSize(2),
          }}>
          {item.item.item.givenName}
        </Text>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({});
