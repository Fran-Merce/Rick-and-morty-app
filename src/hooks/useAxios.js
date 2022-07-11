import { useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { mainContext } from '../context/Context';

export const useAxios = () => {
  const { state, setDataOnContext, dataOnContext } = useContext(mainContext);
  const { pageNumber, gender, search, status, species } = state.apiQuerys;
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    error: false,
    code: null,
  });

  const [hasMore, setHasMore] = useState(true);
  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
      );

      data.info.next !== null ? setHasMore(true) : setHasMore(false);

      setDataOnContext(dataOnContext.concat(data.results));
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setHasMore(false);
      setError({
        error: true,
        code: error.code,
      });
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [state.apiQuerys]);

  return {
    loading,
    error,
    hasMore,
  };
};
