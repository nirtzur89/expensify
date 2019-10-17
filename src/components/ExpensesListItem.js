import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, id, amount, dispatch, createdAt }) => {
  return (
    <div>
      <div>
        <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
        </Link>
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
