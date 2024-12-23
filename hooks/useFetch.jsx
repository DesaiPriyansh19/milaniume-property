import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  async function getData() {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`, // Sending the token in the Authorization header
        },
      });
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // Stop loading when request completes (either success or failure)
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return { data, error, loading };
}
