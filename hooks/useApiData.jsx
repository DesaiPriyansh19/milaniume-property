import { useState, useEffect } from "react";
import axios from "axios";

const useApiData = (baseUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(baseUrl);
      setData(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseUrl}/${id}`);

      return response.data.data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteById = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const updateById = async (id, updatedData) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, updatedData);
      setData((prevData) =>
        prevData.map((item) => (item._id === id ? response.data.data : item))
      );
      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const addNew = async (newData) => {
    try {
      const response = await axios.post(baseUrl, newData);
      setData((prevData) => [...prevData, response.data.data]);
      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  // UseEffect to fetch initial data
  useEffect(() => {
    fetchData();
  }, [baseUrl]);

  return {
    data,
    loading,
    error,
    fetchData,
    fetchById,
    deleteById,
    updateById,
    addNew,
  };
};

export default useApiData;
