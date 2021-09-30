import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux';
// import { setTextFilter } from './actions/filters';

const store = configureStore();
store.dispatch(addExpense({ description: 'water bill', amount:4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}))

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
