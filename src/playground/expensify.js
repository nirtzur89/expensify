import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

//EDIT_EXPENSE
const editExpense = (id, update) => ({
	type: 'EDIT_EXPENSE',
	id,
	update
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

//SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.update
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

//filter Reducer
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		default:
			return state;
	}
};

//get filtered object
const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

//store creation
const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ amount: 72000, description: 'rent' }));
const expenseTwo = store.dispatch(addExpense({ amount: 30000000, description: 'gym' }));

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 55000 }));

store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(500));

//demo state
const demoState = {
	expenses: [
		{
			id: 'kjhlkvh',
			description: 'october rent',
			note: 'anything else to say',
			amount: 72000,
			createdAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', //date or amount
		startDate: undefined,
		endDate: undefined
	}
};

const user = {
	name: 'nir',
	age: 30
};

console.log({ ...user });
