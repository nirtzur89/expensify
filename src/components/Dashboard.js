import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => (
  <div>
    <h1>this is the expenses page</h1>
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

export default Dashboard;
