import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      {/* Edit Expense Page number with a id of {props.match.params.id} */}
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((exp) => exp.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
