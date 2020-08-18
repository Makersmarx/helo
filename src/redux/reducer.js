import axios from 'axios';

const initialState = {
  username: '',
  id: 0,
  profile_pic: '',
};

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(username, profilePic) {
  return {
    type: LOGIN_USER,
    payload: username,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return initialState;
  }
}
