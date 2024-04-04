import api from "../../api"; // Importing API module for making HTTP requests
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SAVE_PROFILE } from "./actionTypes"; // Importing action types
import { toast } from "react-toastify"; // Importing toast notifications

// Action creator for posting login data
export const postLoginData = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST }); // Dispatching login request action
    const { data } = await api.post('/auth/login', { email, password }); // Sending login request to the server
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data, // Dispatching login success action with received data
    });
    localStorage.setItem('token', data.token); // Storing token in localStorage
    toast.success(data.msg); // Showing success toast notification
  }
  catch (error) {
    const msg = error.response?.data?.msg || error.message; // Getting error message
    dispatch({
      type: LOGIN_FAILURE,
      payload: { msg } // Dispatching login failure action with error message
    });
    toast.error(msg); // Showing error toast notification
  }
}

// Action creator for saving user profile
export const saveProfile = (token) => async (dispatch) => {
  try {
    const { data } = await api.get('/profile', {
      headers: { Authorization: token } // Sending authorization header with token
    });
    dispatch({
      type: SAVE_PROFILE,
      payload: { user: data.user, token }, // Dispatching save profile action with user data and token
    });
  }
  catch (error) {
    // Handle error if needed
  }
}

// Action creator for logging out
export const logout = () => (dispatch) => {
  localStorage.removeItem('token'); // Removing token from localStorage
  dispatch({ type: LOGOUT }); // Dispatching logout action
  document.location.href = '/'; // Redirecting to homepage
}
