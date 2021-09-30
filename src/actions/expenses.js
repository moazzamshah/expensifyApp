import uuid from 'react-uuid';

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    description,
    note,
    amount,
    createdAt,
    id: uuid(),
  },
});

// remove expenses
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// edit expense

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
