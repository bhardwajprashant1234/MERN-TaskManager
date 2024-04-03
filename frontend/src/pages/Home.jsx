import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';
import backgroundImage from '../images/a.jpg'; // Import your background image

const Home = () => {
  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;
  const [welcomeSlideIn, setWelcomeSlideIn] = useState(false);
  const [signupSlideIn, setSignupSlideIn] = useState(false);

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Hub";
    // Trigger the slide-in animations after a delay
    setTimeout(() => {
      setWelcomeSlideIn(true);
    }, 9);
    setTimeout(() => {
      setSignupSlideIn(true);
    }, 800);
  }, [authState]);

  return (
    <MainLayout>
      <div
        className='bg-primary text-white min-h-screen flex justify-center items-center'
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="text-center">
          {!isLoggedIn ? (
            <>
              <h1 className={`text-7xl ${welcomeSlideIn ? 'slide-in' : ''}`}> Welcome to Task Hub</h1>
              <Link to="/signup" className={`mt-10 text-xl block space-x-2 hover:space-x-4 ${signupSlideIn ? 'fade-in' : ''}`}>
                <span className='transition-[margin]'>Sign up today and take control of your tasks</span>
                <span className='relative ml-4 text-base transition-[margin]'></span>
              </Link>
            </>
          ) : (
            <>
              <h1 className='text-lg mt-8 mx-8 border-b border-b-gray-300'>Welcome {authState.user.name}</h1>
              <Tasks />
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
