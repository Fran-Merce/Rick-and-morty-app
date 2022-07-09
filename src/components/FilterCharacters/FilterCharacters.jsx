import React, { useContext, useState } from 'react';
import { setFilterAction } from '../../actions/actions';
import { mainContext } from '../../context/Context';
import { types } from '../../reducer/types';

export const FilterCharacters = ({ typeFilter = {} }) => {
  const { dispatch } = useContext(mainContext);
  const { type, options, name } = typeFilter;

  return <div></div>;
};
