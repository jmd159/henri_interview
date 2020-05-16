import {
  LOAD_FEED__START,
  LOAD_FEED__SUCCESS,
  LOAD_FEED__ERROR,
  LOAD_USER_FEED__START,
  LOAD_USER_FEED__ERROR,
  LOAD_USER_FEED__SUCCESS,
  LOAD_COMMENTS__START,
  LOAD_COMMENTS__SUCCESS,
  LOAD_COMMENTS__FAILURE,
  DELETE_FEED_ITEM__START,
  DELETE_FEED_ITEM__SUCCESS,
  DELETE_FEED_ITEM__FAILURE,
  POST_FEED_ITEM__START,
  POST_FEED_ITEM__SUCCESS,
  POST_FEED_ITEM__FAILURE
} from '../actions/feed';
//should really Export As Actions -> Actions.POST_FEED_ITEM__START....

const commentOptions = {
  loading: false,
  error: null,
  comments: []
};

const feedItem = (state = {}, action) => {
  switch (action.type) {
    case LOAD_FEED__START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_FEED__SUCCESS:
      return {
        ...state,
        feedItems: action.response.data,
        loading: false,
        error: null
      };
    case LOAD_FEED__ERROR:
      return {
        ...state,
        loading: false,
        error: action.repsonse.error
      };
    case LOAD_USER_FEED__START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_USER_FEED__SUCCESS:
      return {
        ...state,
        feedItems: action.response.data,
        loading: false,
        error: null
      };
    case LOAD_USER_FEED__ERROR:
      return {
        ...state,
        loading: false,
        error: action.repsonse.error
      };
    case LOAD_COMMENTS__START:
      return {
        ...state,
        commentOptions: {
          ...commentOptions,
          loading: true,
          error: null
        }
      };
    case LOAD_COMMENTS__SUCCESS:
      return {
        ...state,
        commentOptions: {
          ...commentOptions,
          loading: false,
          error: null,
          comments: action.response.data
        }
      };
    case LOAD_COMMENTS__FAILURE:
      return {
        ...state,
        commentOptions: {
          ...commentOptions,
          loading: false,
          error: action.response.error
        }
      };
    case DELETE_FEED_ITEM__START:
      return {
        ...state,
        loading: true
      };
    case DELETE_FEED_ITEM__SUCCESS:
      return {
        ...state,
        loading: false,
        feedItems: removeItem(state.feedItems, action.index)
      };
    case DELETE_FEED_ITEM__FAILURE:
      return {
        ...state,
        error: 'Something went wrong'
      };
    case POST_FEED_ITEM__START:
      return {
        ...state,
        loading: true
      };
    case POST_FEED_ITEM__SUCCESS:
      return {
        ...state,
        loading: false,
        feedItems: addPost(state.feedItems, action.params)
      };
    case POST_FEED_ITEM__FAILURE:
      return {
        ...state,
        error: 'Something went wrong'
      };
    default:
      return state;
  }
};

const addPost = (list, newData) => {
  const newList = [...list];
  newList.unshift({ ...newData });
  return newList;
};

const removeItem = (list, index) => {
  const newList = [...list];
  newList.splice(index, 1);
  return newList;
};

export default feedItem;
