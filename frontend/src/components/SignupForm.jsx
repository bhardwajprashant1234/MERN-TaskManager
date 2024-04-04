import React, { useState } from 'react'; // Importing React library and useState hook
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate from react-router-dom
import useFetch from '../hooks/useFetch'; // Importing custom hook for fetching data
import validateManyFields from '../validations'; // Importing validation function
import Input from './utils/Input'; // Importing Input component
import Loader from './utils/Loader'; // Importing Loader component

// Signup form component
const SignupForm = () => {

  // State for form errors and form data
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Custom hook for fetching data
  const [fetchData, { loading }] = useFetch();
  const navigate = useNavigate(); // Accessing navigation function from react-router-dom

  // Handle form input changes
  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateManyFields("signup", formData); // Validate form fields
    setFormErrors({}); // Clear previous form errors
    if (errors.length > 0) {
      setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {})); // Set form errors
      return;
    }

    const config = { url: "/auth/signup", method: "post", data: formData }; // API request configuration
    fetchData(config).then(() => {
      navigate("/login"); // Redirect to login page after successful signup
    });

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
      <form className='m-auto my-16 max-w-[500px] p-8 bg-cyan-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-green-400'>
        {loading ? (
          <Loader /> // Show loader if loading state is true
        ) : (
          <>
            <h2 className='text-center mb-4'>SignUp TaskHub</h2>
            <div className="mb-4">
              <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500">Name</label>
              <Input type="text" name="name" id="name" value={formData.name} placeholder="Enter name.." onChange={handleChange} />
              {fieldError("name")}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
              <Input type="text" name="email" id="email" value={formData.email} placeholder="Enter your Email" onChange={handleChange} />
              {fieldError("email")}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
              <Input type="password" name="password" id="password" value={formData.password} placeholder="Enter your password" onChange={handleChange} />
              {fieldError("password")}
            </div>

            <button className='bg-red-500 hover:bg-green-500 text-white px-4 py-2 font-medium rounded-md' onClick={handleSubmit}>Submit</button>


            <div className='pt-4'>
              <Link to="/login" className='text-purple-900'>Already have an account?</Link>
            </div>
          </>
        )}

      </form>
    </>
  )
}

export default SignupForm; // Export SignupForm component
