import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ItemSeparator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 0.5,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 15
  }
});
