import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Task from "./pages/Task";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { saveProfile } from "./redux/actions/authActions";
import NotFound from "./pages/NotFound";

function App() {
  // Select authentication state from Redux store
  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  // Fetch user profile on app load if logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return; // Skip if no token found
    dispatch(saveProfile(token)); // Dispatch action to fetch user profile
  }, [authState.isLoggedIn, dispatch]); // Dependencies for useEffect

  return (
    <>
      <BrowserRouter>
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          {/* Signup page route - redirect to Home if already logged in */}
          <Route path="/signup" element={authState.isLoggedIn ? <Navigate to="/" /> : <Signup />} />
          <Route path="/login" element={<Login />} /> {/* Login page route */}
          {/* Add Task page route - redirect to Login if not logged in */}
          <Route path="/tasks/add" element={authState.isLoggedIn ? <Task /> : <Navigate to="/login" state={{ redirectUrl: "/tasks/add" }} />} />
          {/* Task details page route - redirect to Login if not logged in */}
          <Route path="/tasks/:taskId" element={authState.isLoggedIn ? <Task /> : <Navigate to="/login" state={{ redirectUrl: window.location.pathname }} />} />
          {/* NotFound page route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
