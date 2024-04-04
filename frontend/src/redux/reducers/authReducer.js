import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SAVE_PROFILE } from "../actions/actionTypes"; // Importing action types

// Initial state for authentication
const initialState = {
  loading: false, // Loading state for API requests
  user: {}, // User object
  isLoggedIn: false, // Login status
  token: "", // Token for authentication
  successMsg: "", // Success message
  errorMsg: "", // Error message
}

// Reducer function for authentication
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      // Set loading state during login request
      return { loading: true, user: {}, isLoggedIn: false, token: "", successMsg: "", errorMsg: "" };
    case LOGIN_SUCCESS:
      // Set user data, login status, token, and success message on successful login
      return { loading: false, user: action.payload.user, isLoggedIn: true, token: action.payload.token, successMsg: action.payload.msg, errorMsg: "" };
    case LOGIN_FAILURE:
      // Set error message on login failure
      return { loading: false, user: {}, isLoggedIn: false, token: "", successMsg: "", errorMsg: action.payload.msg };
    case LOGOUT:
      // Reset state on logout
      return { loading: false, user: {}, isLoggedIn: false, token: "", successMsg: "", errorMsg: "" }
    case SAVE_PROFILE:
      // Save user profile data and update login status and token
      return { loading: false, user: action.payload.user, isLoggedIn: true, token: action.payload.token, successMsg: "", errorMsg: "" }
    default:
      return state; // Return current state for unknown actions
  }
}

export default authReducer;
