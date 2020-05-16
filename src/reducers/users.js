import {
  GET_USERS__START,
  GET_USERS__SUCCESS,
  GET_USERS__ERROR,
  UPDATE_USERS__PHOTO_START,
  UPDATE_USERS__PHOTO_SUCCESS,
  UPDATE_USERS__PHOTO_FAILURE
} from "../actions/users";

const initialState = {
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS__START:
      return {
        ...state,
        loading: true
      };

    case GET_USERS__SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userData: [...action.response.data]
      };

    case GET_USERS__ERROR:
      return {
        ...state,
        error: action.payload.error
      };
    case UPDATE_USERS__PHOTO_START:
      return {
        ...state,
        photoState: {
          ...initialState,
          loading: true
        }
      };
    case UPDATE_USERS__PHOTO_SUCCESS:
      return {
        ...state,
        photoState: {
          ...initialState,
          loading: false,
          error: false
        },
        userData: state.userData.map((item, index) => {
          return {
            ...item,
            photo: action.response.data[index].photo
          };
        })
      };
    case UPDATE_USERS__PHOTO_FAILURE:
      return {
        ...state,
        photoState: {
          ...initialState,
          error: action.error
        }
      };
    default:
      return state;
  }
}
