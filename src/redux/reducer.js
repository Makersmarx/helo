import axios from 'axios';

const initialState = {
  username: '',
  id: 0,
  profile_pic: '',
};

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

export function loginUser(username, profilePic) {
  return {
    type: LOGIN_USER,
    payload: user,
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return initialState;
  }
}
