import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react'; // removed useLayoutEffect
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import Contacts from 'react-native-contacts';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const [data, setData] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await requestMultiple([
          PERMISSIONS.IOS.CONTACTS,
          PERMISSIONS.ANDROID.READ_CONTACTS,
        ]);
        const contacts = await Contacts.getAll();
        setData(contacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchData();
  }, []);
  const renderItem = ({item, index}) => {
    console.log(index, 'item => data');
    const phoneNumber =
      item.phoneNumbers.length > 0
        ? item.phoneNumbers[0].number
        : 'No phone number';

    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('PersonalChat', {item})}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: responsiveScreenWidth(2),
          paddingHorizontal: responsiveScreenWidth(3),
        }}>
        <Image
          source={require('../../assets/avatar.png')}
          style={{
            height: responsiveScreenWidth(10),
            width: responsiveScreenWidth(10),
            borderRadius: responsiveScreenWidth(10),
          }}
        />
        <View
          style={{
            marginLeft: responsiveScreenWidth(5),
            gap: 5,
          }}>
          <Text>{item.givenName}</Text>
          <Text>{phoneNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        initialNumToRender={11}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({});
