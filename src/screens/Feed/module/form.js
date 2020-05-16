import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import myActions from '../../../actions';

const initialInputState = {
  title: '',
  body: ''
};

const sendPost = (params, navigation, dispatch) => {
  dispatch(myActions.feed.uploadPost(params));
  navigation.goBack();
};

export default function CreatePostScreen({ navigation }) {
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { title, body } = eachEntry;
  const dispatch = useDispatch();
  const setId = useSelector(state => state.userReducer.userData[0].id);
  const onChangeText = (text, name) => {
    setEachEntry({ ...eachEntry, [name]: text });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>TITLE</Text>

        <TextInput
          name="title"
          style={styles.titleInputContainer}
          onChangeText={text => onChangeText(text, 'title')}
          value={title}
        />

        <Text style={styles.text}>BODY</Text>
        <TextInput
          name="body"
          style={styles.bodyInputContainer}
          multiline
          numberOfLines={4}
          onChangeText={text => onChangeText(text, 'body')}
          value={body}
        />
        <SubmitButton
          dispatch={dispatch}
          navigation={navigation}
          eachEntry={eachEntry}
          id={setId}
        />
      </View>
    </ScrollView>
  );
}

function SubmitButton({ navigation, dispatch, eachEntry, id }) {
  const params = {
    ...eachEntry,
    userId: id
  };
  return (
    <TouchableOpacity
      style={styles.submitButton}
      onPress={() => sendPost(params, navigation, dispatch)}
    >
      <Text style={styles.buttonText}>Submit Post</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdfdf'
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 25
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#12c9bd'
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: 'black',
    flex: 1,
    borderColor: '#12c9bd',
    borderWidth: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  titleInputContainer: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 8
  },
  bodyInputContainer: {
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 8
  }
});
