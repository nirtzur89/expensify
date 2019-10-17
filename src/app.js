import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

//redux imports
import { addExpense } from './actions/expenses';

import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ amount: 72000, description: 'home rent', createdAt: 5000 })
);
const expenseTwo = store.dispatch(
  addExpense({ amount: 30000000, description: 'office rent', createdAt: 500 })
);
const expenseThree = store.dispatch(
  addExpense({ amount: 50000, description: 'gym', createdAt: -2500 })
);
const expenseFour = store.dispatch(
  addExpense({ amount: 1000, description: 'coffee', createdAt: 1000000000 })
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
