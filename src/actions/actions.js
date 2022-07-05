export const setFilterAction = (filter, type) => {
  return {
    type,
    payload: {
      text: filter,
    },
  };
};
