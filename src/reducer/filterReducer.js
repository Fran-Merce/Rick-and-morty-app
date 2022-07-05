import { types } from './types';

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_GENDER:
      return {
        ...state,
        apiQuerys: {
          ...state.apiQuerys,
          gender: action.payload.text,
        },
      };
    case types.SET_SPECIES:
      return {
        ...state,
        apiQuerys: {
          ...state.apiQuerys,
          species: action.payload.text,
        },
      };
    case types.SET_STATUS:
      return {
        ...state,
        gender: action.payload.text,
      };
    // case types.SET_SEARCH
    default:
      return state;
  }
};
