import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import {
  GET_USERS__START,
  GET_USERS__SUCCESS,
  GET_USERS__ERROR,
  UPDATE_USERS__PHOTO_START,
  UPDATE_USERS__PHOTO_SUCCESS,
  UPDATE_USERS__PHOTO_FAILURE
} from "../../actions/users";
const axios = require("axios");
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item";
import ItemSeparator from "../../components/ItemSeparator";
const API_KEY = "dca033ab27d8dc3c7d017924073f03";

const options = {
  url: "https://uifaces.co/api",
  headers: {
    "X-API-KEY": API_KEY,
    Accept: "application/json",
    "Cache-Control": "no-cache"
  }
};

const usersURL = "https://jsonplaceholder.typicode.com/users";
//async functions
async function getImages(dispatch) {
  try {
    dispatch({ type: UPDATE_USERS__PHOTO_START });
    const response = await axios.get(options.url, { headers: options.headers });
    if (response.error) {
      throw response.error;
    }
    dispatch({ type: UPDATE_USERS__PHOTO_SUCCESS, response });
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_USERS__PHOTO_FAILURE, error });
  }
}

async function getData(dispatch) {
  try {
    dispatch({ type: GET_USERS__START });
    const response = await axios.get(usersURL);

    if (response.error) {
      throw response.error;
    }
    dispatch({ type: GET_USERS__SUCCESS, response });
  } catch (error) {
    dispatch({ type: GET_USERS__ERROR });
  }
}

export default function UsersScreen({ navigation }) {
  const props = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const { loading } = props;

  useEffect(() => {
    getData(dispatch);
    getImages(dispatch);
  }, []);

  return loading ? (
    <ActivityIndicator size="large" color="blue" />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={props.userData}
        renderItem={({ item, index }) => (
          <Item
            id={item.id}
            title={item.name}
            email={item.email}
            imageLoading={props.photoState.loading}
            image={item.photo}
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 16
  }
});
