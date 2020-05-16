import {
  getFeedItems,
  getUserFeedItems,
  getFeedComments,
  deleteFeedItem,
  uploadFeedItem
} from "../api/feed";

export const LOAD_FEED__START = 'LOAD_FEED__START';
export const LOAD_FEED__SUCCESS = 'LOAD_FEED__SUCCESS';
export const LOAD_FEED__ERROR = 'LOAD_FEED__ERROR';

export const LOAD_USER_FEED__START = 'LOAD_USER_FEED__START';
export const LOAD_USER_FEED__SUCCESS = 'LOAD_USER_FEED__SUCCESS';
export const LOAD_USER_FEED__ERROR = 'LOAD_USER_FEED__ERROR';

export const LOAD_COMMENTS__START = 'LOAD_COMMENTS__START';
export const LOAD_COMMENTS__SUCCESS = 'LOAD_COMMENTS__SUCCESS';
export const LOAD_COMMENTS__FAILURE = 'LOAD_COMMENTS__FAILURE';

export const DELETE_FEED_ITEM__START = 'DELETE_FEED_ITEM__START';
export const DELETE_FEED_ITEM__SUCCESS = 'DELETE_FEED_ITEM__SUCCESS';
export const DELETE_FEED_ITEM__FAILURE = 'DELETE_FEED_ITEM__FAILURE';

export const POST_FEED_ITEM__START = 'POST_FEED_ITEM__START';
export const POST_FEED_ITEM__SUCCESS = 'POST_FEED_ITEM__SUCCESS';
export const POST_FEED_ITEM__FAILURE = 'POST_FEED_ITEM__FAILURE';

const loadFeed = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_FEED__START });

      const response = await getFeedItems();

      if (response.error) {
        throw response.error;
      }
      if (response) {
        dispatch({ type: LOAD_FEED__SUCCESS, response });
      }
    } catch (error) {
      dispatch({ type: LOAD_FEED__ERROR });
    }
  };
};

const loadUserFeedItem = userId => {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_USER_FEED__START });

      const response = await getUserFeedItems(userId);

      if (response.error) {
        throw response.error;
      }
      if (response) {
        dispatch({ type: LOAD_USER_FEED__SUCCESS, response });
      }
    } catch (error) {
      dispatch({ type: LOAD_USER_FEED__ERROR });
    }
  };
};

const loadComments = id => {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_COMMENTS__START });

      const response = await getFeedComments(id);

      if (response.error) {
        throw response.error;
      }
      if (response) {
        dispatch({ type: LOAD_COMMENTS__SUCCESS, response });
      }
    } catch (error) {
      dispatch({ type: LOAD_COMMENTS__FAILURE });
    }
  };
};

const deleteItem = (id, index) => {
  return async dispatch => {
    try {
      dispatch({ type: DELETE_FEED_ITEM__START });

      const response = await deleteFeedItem(id);
      if (response.error) {
        throw response.error;
      }
      if (response) {
        dispatch({ type: DELETE_FEED_ITEM__SUCCESS, index });
      }
    } catch (error) {
      dispatch({ type: DELETE_FEED_ITEM__FAILURE });
    }
  };
};

const uploadPost = params => {
  return async dispatch => {
    try {
      dispatch({ type: POST_FEED_ITEM__START });

      const response = await uploadFeedItem(params);
      if (response.error) {
        throw response.error;
      }
      if (response) {
        dispatch({ type: POST_FEED_ITEM__SUCCESS, params });
      }
    } catch (error) {
      dispatch({ type: POST_FEED_ITEM__FAILURE });
    }
  };
};

export default {
  loadFeed,
  loadUserFeedItem,
  loadComments,
  deleteItem,
  uploadPost
};
