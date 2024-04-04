import React, { useState } from 'react'; // Importing React library and useState hook
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate from react-router-dom
import validateManyFields from '../validations'; // Importing validation function
import Input from './utils/Input'; // Importing Input component
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector hooks from react-redux
import { postLoginData } from '../redux/actions/authActions'; // Importing action for posting login data
import Loader from './utils/Loader'; // Importing Loader component
import { useEffect } from 'react'; // Importing useEffect hook

// Login form component
const LoginForm = ({ redirectUrl }) => {

  // State for form errors and form data
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate(); // Accessing navigation function from react-router-dom

  // Redux state and dispatch function
  const authState = useSelector(state => state.authReducer);
  const { loading, isLoggedIn } = authState;
  const dispatch = useDispatch();

  // Redirect user if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectUrl || "/"); // Redirect to specified URL or home page
    }
  }, [authState, redirectUrl, isLoggedIn, navigate]);

  // Handle form input changes
  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateManyFields("login", formData); // Validate form fields
    setFormErrors({}); // Clear previous form errors
    if (errors.length > 0) {
      setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {})); // Set form errors
      return;
    }
    dispatch(postLoginData(formData.email, formData.password)); // Dispatch action to post login data
  }

  // Render field error message if exists
  const fieldError = (field) => (
    <p className={`mt-1 text-pink-600 text-sm ${formErrors[field] ? "block" : "hidden"}`}>
      <i className='mr-2 fa-solid fa-circle-exclamation'></i>
      {formErrors[field]}
    </p>
  )

  return (
    <>
      <form className='m-auto my-16 max-w-[500px] p-8 border-2 shadow-md rounded-md'
            style={{ 
              backgroundImage: 'linear-gradient(to right, #FFD700, #FFA500, #FF8C00)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              color: 'white' 
            }}>
        {loading ? (
          <Loader /> // Show loader if loading state is true
        ) : (
          <>
            <h2 className='text-black text-center mb-4'>Login Taskhub</h2>

            <div className="mb-4">
              <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-black">Email</label>
              <Input type="text" name="email" id="email" value={formData.email} placeholder="youremail@domain.com" onChange={handleChange} />
              {fieldError("email")} {/* Display email field error message */}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-black">Password</label>
              <Input type="password" name="password" id="password" value={formData.password} placeholder="Your password.." onChange={handleChange} />
              {fieldError("password")} {/* Display password field error message */}
            </div>

            <button className='bg-red-500 hover:bg-green-500 text-white px-4 py-2 font-medium rounded-md' onClick={handleSubmit}>Submit</button>

            <div className='pt-4'>
              <Link to="/signup" className='text-purple-900'>Don't have an account?</Link>
            </div>
          </>
        )}
      </form>
    </>
  )
}

export default LoginForm; // Export LoginForm component
