import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const [state, setState] = React.useState(false);
  const navigation = useNavigation();

  const slides = [
    {
      key: 'one',
      title: 'Private Message',
      text: 'communicate with your friends via private message.',
      icon: 'envelope-open',
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Group Chat',
      text: 'Create group chat and stay in touch touch with your gang.',
      icon: 'wechat',
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Send Photos & Videos',
      text: 'Have fun with your friends by sending photos and videos to each other.',
      icon: 'camera',
      backgroundColor: '#22bcb5',
    },
    {
      key: 'four',
      title: 'Rocket guy',
      text: 'Receive a notifications when your friends are looking for you.',
      icon: 'bell',
      backgroundColor: '#483285',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <FontAwesome
          name={item.icon}
          size={responsiveWidth(30)}
          color="white"
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const onDone = () => {
    navigation.replace('signup');
  };
  return (
    <View style={styles.container}>
      <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#704BFF',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveWidth(50),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: responsiveWidth(10),
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: responsiveWidth(10),
    marginHorizontal: responsiveWidth(10),
  },
});
