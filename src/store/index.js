import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/users";
import feedItems from "../reducers/feed";

const appReducers = combineReducers({
  userReducer,
  feedItems
});

const rootReducer = (state, action) => appReducers(state, action);

let middleware = [];
middleware = [...middleware, thunk];

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);
