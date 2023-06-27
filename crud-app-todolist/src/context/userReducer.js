import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_USERS
} from './actionTypes';

export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
      case SET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case UPDATE_USER:
      const updatedUser=action.payload;
      const updatedUsers=state?.users?.map((user) =>
      user._id === updatedUser._id ? updatedUser : user
    );
      return {
        ...state,
        users: updatedUsers
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload)
      };
    default:
      return state;
  }
};
