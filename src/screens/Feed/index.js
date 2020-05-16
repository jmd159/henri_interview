import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import FeedItem from '../../components/FeedItem';
import myActions from '../../actions';

export default function FeedScreen({ navigation }) {
  const users = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const feedItems = useSelector(state => state.feedItems);
  const { loading } = feedItems;
  const { imageLoading, error } = users.photoState;
  const shouldUpdate = imageLoading === false && error === false;
  useEffect(() => {
    dispatch(myActions.feed.loadUserFeedItem(users.userData[0].id));
  }, [shouldUpdate]);
  return loading ? (
    <ActivityIndicator size="small" color="blue" />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={feedItems.feedItems}
        renderItem={({ item, index }) => (
          <FeedItem
            index={index}
            item={item}
            author={users.userData[0]}
            imageLoading={imageLoading}
          />
        )}
        extraData={users.userData && feedItems.feedItems}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
      />
      <AddPost navigation={navigation} />
    </View>
  );
}

function AddPost({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CREATE POST')}>
      <View style={styles.addPostButton}>
        <Icon name="plus" size={35} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5d706f'
  },
  addPostButton: {
    position: 'absolute',
    bottom: 35,
    left: '42%',
    width: 55,
    height: 55,
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#12c9bd',
    borderWidth: 1
  }
});
