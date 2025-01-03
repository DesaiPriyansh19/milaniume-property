import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook from react-router-dom

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Get current location from react-router-dom

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  async function getData() {
    setLoading(true);
    setError(null);

    // Check if userInfo is available and if the URL requires token
    if (!userInfo || !userInfo.token || location.pathname === "/") {
      try {
        const response = await axios.get(url); // Skip token for these URLs
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false); // Stop loading when request completes (either success or failure)
      }
    } else {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`, // Send the token in the Authorization header
          },
        });
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false); // Stop loading when request completes (either success or failure)
      }
    }
  }

  useEffect(() => {
    getData();
  }, [url, location.pathname]); // Depend on url and location.pathname to detect URL changes

  return { data, error, loading };
}
