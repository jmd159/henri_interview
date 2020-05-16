import React from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

export default function Avatar({ image, imageLoading }) {
  return (
    <View style={styles.container}>
      {imageLoading ? (
        <ActivityIndicator size="large" color="lightblue" />
      ) : (
        <Image source={{ uri: image }} style={{ flex: 1 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignContent: 'center'
  }
});
