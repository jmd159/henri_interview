import React, { useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import myActions from '../actions';
import Avatar from './Avatar';

export default function FeedItem({ item, index, author, imageLoading }) {
  const [expanded, expand] = useState(false);
  const comments = useSelector(state => state.feedItems.commentOptions);
  const dispatch = useDispatch();
  const loaded = true;
  return (
    <TouchableOpacity
      onPress={() => getComments(item, expand, expanded, dispatch)}
      key={index}
    >
      <View style={styles.container}>
        <View style={styles.itemColumn}>
          <View style={styles.avatarRow}>
            <Avatar imageLoading={imageLoading} image={author.photo} />
            <Text style={{ marginLeft: 15 }}>{author.email}</Text>
          </View>
          <Text style={styles.rows}>
            <Text style={styles.rowText}>Title: </Text>
            <Text>{item.title}</Text>
          </Text>
          <Text style={styles.rows}>
            <Text style={styles.rowText}>Body: </Text>
            <Text>{item.body}</Text>
          </Text>
        </View>
        <View style={styles.closeButton}>
          <CloseButton dispatch={dispatch} item={item} index={index} />
        </View>
      </View>
      {expanded && loaded && (
        <View style={styles.commentsContainer}>
          <Comments
            loading={comments.loading}
            error={comments.error}
            comments={comments.comments}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const getComments = (item, expand, expanded, dispatch) => {
  dispatch(myActions.feed.loadComments(item.id));
  expand(!expanded);
};

const deleteComment = (item, dispatch, index) => {
  dispatch(myActions.feed.deleteItem(item.id, index));
};

function CloseButton({ dispatch, item, index }) {
  return (
    <TouchableOpacity
      onPress={() => {
        deleteComment(item, dispatch, index);
      }}
    >
      <Icon name="close" size={20} color="gray" />
    </TouchableOpacity>
  );
}

function Comments({ comments, loading, error }) {
  return loading ? (
    <ActivityIndicator size="small" color="black" />
  ) : (
    comments.map(item => {
      return (
        <View key={item.id} style={styles.comments}>
          <Text style={styles.rows}>
            <Text style={styles.rowText}>User Email: </Text>
            <Text>{item.email}</Text>
          </Text>
          <Text style={styles.rows}>
            <Text style={styles.rowText}>Title: </Text>
            <Text>{item.name}</Text>
          </Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>{item.body}</Text>
          </View>
        </View>
      );
    })
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 5,
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 30,
    paddingVertical: 5,
    marginHorizontal: 16
  },
  itemColumn: {
    flexDirection: 'column'
  },
  avatarRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  rows: {
    flexDirection: 'row'
  },
  rowText: {
    fontWeight: '600',
    fontSize: 15
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5
  },
  commentsContainer: {
    marginVertical: 8,
    marginLeft: 25,
    marginRight: 16
  },
  comments: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 4,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: 'column',
    padding: 10
  },
  bodyContainer: {
    backgroundColor: 'lightgray',
    marginTop: 4,
    borderRadius: 8,
    padding: 5
  },
  bodyText: {
    marginLeft: 4,
    textAlign: 'left'
  }
});
