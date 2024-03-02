import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import ChatHeader from '../../components/ChatHeader';
import HeaderNavigation from '../../components/HeaderBack';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PersonalChat = ({route}) => {
  const data = route.params;
  const [typedMessage, setTypedMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (typedMessage.trim() !== '') {
      setMessages([...messages, typedMessage]);
      setTypedMessage('');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <HeaderNavigation />
        <ChatHeader item={data} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {messages.map((message, index) => (
          <Text key={index}>{message}</Text>
        ))}
      </ScrollView>

      <KeyboardAvoidingView
        style={styles.textInputContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          placeholder="Send"
          style={styles.TextInput}
          value={typedMessage}
          onChangeText={text => setTypedMessage(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <MaterialIcons
            name={'send'}
            color={'#704BFF'}
            size={responsiveScreenWidth(8)}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PersonalChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#704BFF',
  },
  TextInput: {
    flex: 1,
    paddingVertical: responsiveScreenWidth(3),
  },
  textInputContainer: {
    paddingHorizontal: responsiveScreenWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Adjust as needed
  },
});
