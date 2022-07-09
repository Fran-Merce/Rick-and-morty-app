import React, { useContext, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import { mainContext } from '../context/Context';
import { setPageAction, setSearchAction } from '../actions/actions';
import { types } from '../reducer/types';
import { CharacterCard } from '../components/CharacterCard/CharacterCard';
import { CharactersCardsWrapper } from '../components/UI/CharactersCardsWrapper';

import { filtersCharactersTypes } from '../helpers/dataFilters';
import { FilterCharacters } from '../components/FilterCharacters/FilterCharacters';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const { loading, error, hasMore } = useAxios();
  const { dispatch, dataOnContext, setDataOnContext, state } =
    useContext(mainContext);

  const handleOnChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setDataOnContext([]);
    dispatch(setSearchAction(search));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={handleOnChange} value={search} />
      </form>

      {filtersCharactersTypes.map(type => (
        <FilterCharacters typeFilter={type} />
      ))}

      <CharactersCardsWrapper>
        {dataOnContext?.map(character => (
          <CharacterCard {...character} />
        ))}
      </CharactersCardsWrapper>
      {hasMore && (
        <button onClick={e => dispatch(setPageAction(types.SET_PAGE_NUMBER))}>
          Ver Mas
        </button>
      )}
    </>
  );
};
