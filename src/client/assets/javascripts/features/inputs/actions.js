export const setInputValue = (fieldId, value) => {
  return {
    type: 'INPUT_SET',
    payload: {
      id: fieldId,
      value: value,
    },
  };
}
