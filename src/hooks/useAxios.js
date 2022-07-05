import { useContext, useEffect, useState } from 'react';
import { mainContext } from '../context/Context';
import axios from 'axios';

export const useAxios = queryParams => {
  const { pageNumber, gender, search, status, species } = queryParams;

  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const [error, setError] = useState('');

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
      );

      setdata(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [queryParams]);

  return {
    data,
    loading,
    error,
  };
};
