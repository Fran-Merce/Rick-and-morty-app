import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { setSearchAction } from '../../actions/actions';
import { mainContext } from '../../context/Context';
import { FormStyled } from './SearchStyled';

export const Search = ({ loading }) => {
  const { dispatch, setDataOnContext } = useContext(mainContext);
  const [search, setSearch] = useState('');
  const handleOnChange = ({ target }) => setSearch(target.value);

  const onSubmit = e => {
    e.preventDefault();
    setDataOnContext([]);
    dispatch(setSearchAction(search));
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <input
        readOnly={loading}
        type='text'
        onChange={handleOnChange}
        value={search}
        placeholder='Search...'
      />
    </FormStyled>
  );
};
