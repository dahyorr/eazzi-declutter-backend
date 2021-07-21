import { combineReducers } from "redux";
import types from '../actions/types';

const authReducer = (state = {isAuthenticated: false}, action) => {
  switch (action.type) {
    case types.AUTH_ERROR:
      return {isAuthenticated: false, error: action.payload}
    case types.SIGN_IN:
    case types.SIGN_UP:
    case types.GET_USER:
      console.log(action.type);
      return {...state, ...action.payload}
    case types.LOGOUT:
      return action.payload
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
});
