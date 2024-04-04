import { useCallback, useState } from "react"; // Importing necessary hooks from React
import { toast } from "react-toastify"; // Importing toast notifications
import api from "../api"; // Importing API service

// Custom hook for fetching data from the API
const useFetch = () => {

  // State to manage loading state, data, success and error messages
  const [state, setState] = useState({
    loading: false,
    data: null,
    successMsg: "",
    errorMsg: "",
  });

  // Function to fetch data from the API
  const fetchData = useCallback(async (config, otherOptions) => {
    const { showSuccessToast = true, showErrorToast = true } = otherOptions || {};
    setState(state => ({ ...state, loading: true })); // Set loading to true

    try {
      const { data } = await api.request(config); // Fetch data from API
      setState({ // Update state with data and success message
        loading: false,
        data,
        successMsg: data.msg || "success",
        errorMsg: ""
      });

      if (showSuccessToast) toast.success(data.msg); // Show success toast notification
      return Promise.resolve(data);
    }
    catch (error) {
      const msg = error.response?.data?.msg || error.message || "error"; // Get error message
      setState({ // Update state with error message
        loading: false,
        data: null,
        errorMsg: msg,
        successMsg: ""
      });

      if (showErrorToast) toast.error(msg); // Show error toast notification
      return Promise.reject();
    }
  }, []);

  return [fetchData, state]; // Return fetchData function and state
}

export default useFetch; // Export the custom hook
