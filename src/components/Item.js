import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Avatar from './Avatar';

export default function Item({ id, title, imageLoading, image, email }) {
  return (
    <View key={id} style={styles.container}>
      <Avatar imageLoading={imageLoading} image={image} />
      <View style={styles.data}>
        <Text>{title}</Text>
        <Text>{email}</Text>
      </View>
      <View style={styles.phone}>
        <Icon name="phone" size={30} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8
  },
  data: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15
  },
  phone: {
    position: 'absolute',
    right: 31
  }
});
