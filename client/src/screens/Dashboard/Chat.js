import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';

const Chat = ({}) => {
  const navigation = useNavigation();

  Platform.OS === 'ios' &&
    useLayoutEffect(() => {
      navigation.setOptions({
        headerLargeTitle: true,
        headerSearchBarOptions: {
          placeholder: 'Search',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <FontAwesome name={'edit'} size={responsiveScreenWidth(5)} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity>
            <Text>Edit</Text>
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Chat</Text>
    </ScrollView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
