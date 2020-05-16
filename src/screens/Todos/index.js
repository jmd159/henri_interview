import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import TodoItem from "../../components/TodoItem";

const axios = require("axios");
const todos = "https://jsonplaceholder.typicode.com/users/1/todos";


async function getTodos(setTodos) {
  try {
    const response = await axios.get(todos);
    if (response.error) {
      throw response.error;
    }
    setTodos(response.data);
  } catch (error) {
    console.log(error);
  }
}
//update custom radio buttons local state
function updateList(item, todos, setTodos) {
  const newList = todos.map(x => {
    return {
      ...x,
      completed: item.id === x.id ? !item.completed : x.completed
    };
  });
  setTodos(newList);
}

export default function TodoScreen() {
  const [todos, setTodos] = useState();
  const loading = todos === undefined;
  useEffect(() => {
    getTodos(setTodos);
  }, []);
  return loading ? (
    <ActivityIndicator
      size="large"
      color="blue"
    />
  ) : (
    <View
      style={styles.container}
    >
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <TodoItem
            item={item}
            onPress={() => updateList(item, todos, setTodos)}
          />
        )}
        extraData={todos}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16
  }
})
