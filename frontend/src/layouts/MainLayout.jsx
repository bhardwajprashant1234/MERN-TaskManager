import React from 'react'; // Importing React library
import Navbar from '../components/Navbar'; // Importing Navbar component

// Main layout component with Navbar and children components
const MainLayout = ({ children }) => {
  return (
    <>
      <div className='relative bg-green-50 h-screen w-screen overflow-x-hidden'>
        <Navbar /> {/* Rendering Navbar component */}
        {children} {/* Rendering children components */}
      </div>
    </>
  );
};

export default MainLayout; // Exporting MainLayout component
