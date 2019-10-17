import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, id, amount, dispatch, createdAt }) => {
  return (
    <div>
      <div>
        {description && <h3>{description}</h3>}
        {amount && <p>Amount: {amount}</p>}
        {createdAt && <p>Created at: {createdAt}</p>}
        <button
          onClick={() => {
            dispatch(removeExpense({ id }));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default connect()(ExpenseListItem);
