import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ************* Action Generator **************
// Add expenses
const addExpense = ({
  description = '',
  note = '',
  amount = '',
  createdAt = '',
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// remove expenses
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// edit expense

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
// set_text_filters
const setTextFilters = (text = '') => ({
  type: 'SET_TEXT_FILTERS',
  text,
});
// sort_by_amount

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// sort_by_date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
// set_start_date
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

// set_end_date
const setEndDate = (endDate) => ({
  type: 'SET_End_DATE',
  endDate,
});

// ************* Expense Reducer **************
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// ************* Filter Reducer **************
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTERS':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_End_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    });
};

// ************* store creation **************

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);
// ************ Subscribe ************************
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// ************ Dispatch ************************
const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 })
);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilters('ent'));
store.dispatch(setTextFilters());

store.dispatch(sortByAmount()); // should be amount
store.dispatch(sortByDate()); // should be sort by date

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: 'random',
      description: 'january rent',
      note: 'this was the final payment for that address',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount field
    startDate: undefined,
    endDate: undefined,
  },
};

// const user = {
//   name: 'Jen',
//   age: 24,
// };
