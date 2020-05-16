import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

export default function TodoItem({ item, onPress }) {
  return (
    <TouchableOpacity key={item.id} onPress={onPress}>
      <View style={styles.container}>
        <RadioButton checked={item.completed} />
        <View style={styles.columns}>
          <Text>TODO: </Text>
          <Text>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 75,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: 8
  },
  columns: { flexDirection: 'column', marginLeft: 10 }
});
