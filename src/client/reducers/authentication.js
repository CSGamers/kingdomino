import * as types from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER: {
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    }
    case types.SIGN_OUT_USER: {
      return {
        ...state,
        user: '',
        isAuthenticated: false
      }
    }
    default:
      return state;
  }
}

export default authReducer;