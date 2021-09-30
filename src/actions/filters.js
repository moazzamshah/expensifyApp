// set_text_filters
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTERS',
  text,
});
// sort_by_amount

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// sort_by_date
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
// set_start_date
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

// set_end_date
export const setEndDate = (endDate) => ({
  type: 'SET_End_DATE',
  endDate,
});
