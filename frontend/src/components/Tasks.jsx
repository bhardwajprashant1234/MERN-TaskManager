import React, { useCallback, useEffect, useState } from 'react'; // Importing React and necessary hooks
import { useSelector } from 'react-redux'; // Importing useSelector from react-redux for accessing state
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import useFetch from '../hooks/useFetch'; // Importing custom hook for fetching data
import Loader from './utils/Loader'; // Importing Loader component for showing loading state
import Tooltip from './utils/Tooltip'; // Importing Tooltip component for task actions

// Tasks component for displaying user tasks
const Tasks = () => {

  const authState = useSelector(state => state.authReducer); // Accessing authentication state from Redux store
  const [tasks, setTasks] = useState([]); // State for storing tasks data
  const [fetchData, { loading }] = useFetch(); // Custom hook for fetching data

  // Function to fetch tasks data from the server
  const fetchTasks = useCallback(() => {
    const config = { url: "/tasks", method: "get", headers: { Authorization: authState.token } }; // API request configuration
    fetchData(config, { showSuccessToast: false }).then(data => setTasks(data.tasks)); // Fetch tasks and update state
  }, [authState.token, fetchData]); // Dependencies for useEffect and useCallback hooks

  useEffect(() => {
    if (!authState.isLoggedIn) return; // Return if user is not logged in
    fetchTasks(); // Fetch tasks data when component mounts or user logs in
  }, [authState.isLoggedIn, fetchTasks]); // Dependencies for useEffect hook

  // Function to handle task deletion
  const handleDelete = (id) => {
    const config = { url: `/tasks/${id}`, method: "delete", headers: { Authorization: authState.token } }; // API request configuration
    fetchData(config).then(() => fetchTasks()); // Delete task and fetch updated tasks data
  }

  return (
    <>
      <div className="my-2 mx-auto max-w-[700px] py-4">
        {tasks.length !== 0 && <h2 className='my-2 ml-2 md:ml-0 text-xl italic'>Your tasks ({tasks.length})</h2>} {/* Render tasks count if tasks exist */}
        {loading ? ( // Show loader if loading state is true
          <Loader />
        ) : (
          <div>
            {tasks.length === 0 ? ( // Render message if no tasks found
              <div className='w-[600px] h-[300px] flex items-center justify-center gap-4'>
                <span>No tasks found</span>
                <Link to="/tasks/add" className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md px-4 py-2">+ Add new task </Link>
              </div>
            ) : (
              tasks.map((task, index) => ( // Render tasks list
                <div key={task._id} className='bg-white my-4 p-4 text-gray-600 rounded-md shadow-md'>
                  <div className='flex'>
                    <span className='font-medium'>Task #{index + 1}</span> {/* Render task number */}
                    {/* Render edit and delete icons with tooltips */}
                    <Tooltip text={"Edit this task"} position={"top"}>
                      <Link to={`/tasks/${task._id}`} className='ml-auto mr-2 text-green-600 cursor-pointer'>
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </Tooltip>
                    <Tooltip text={"Delete this task"} position={"top"}>
                      <span className='text-red-500 cursor-pointer' onClick={() => handleDelete(task._id)}>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </Tooltip>
                  </div>
                  <div className='whitespace-pre'>{task.description}</div> {/* Render task description */}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Tasks; // Export Tasks component
