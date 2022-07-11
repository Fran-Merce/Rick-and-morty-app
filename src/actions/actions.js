import { types } from '../reducer/types';

export const setFilterAction = (filter, type) => {
  console.log(filter);
  return {
    type,
    payload: {
      text: filter,
    },
  };
};

export const setSearchAction = search => {
  return {
    type: types.SET_SEARCH,
    payload: {
      text: search,
    },
  };
};

export const setPageAction = () => {
  return {
    type: types.SET_PAGE,
  };
};
