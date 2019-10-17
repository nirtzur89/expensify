import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const EditExpense = props => {
  console.log('thissss', props.match.params.id);
  return <div>this is edit for expense {props.match.params.id}</div>;
};

export default EditExpense;
