import { createStore } from 'redux';

const decrementCount = ({ by = 1 } = {}) => ({
	type: 'DECREMENT',
	by
});

const incrementCount = ({ by = 1 } = {}) => ({
	type: 'INCREMENT',
	by
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ set = 0 } = {}) => ({
	type: 'SET',
	set
});

//reducer:
//1. a pure function
//2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			// let by = typeof action.by === 'number' ? action.by : 1;
			return {
				count: state.count + action.by
			};
		case 'DECREMENT':
			// by = typeof action.by === 'number' ? action.by : 1;
			return {
				count: state.count - action.by
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.set
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

store.subscribe(() => {
	console.log(store.getState());
});
store.dispatch(decrementCount());
store.dispatch(decrementCount({ by: 10 }));
store.dispatch(resetCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount({ by: 3 }));
store.dispatch(setCount());
store.dispatch(setCount({ set: 100 }));

// store.dispatch({
// 	type: 'INCREMENT',
// 	by: 10
// });

// store.dispatch({
// 	type: 'INCREMENT'
// });

// store.dispatch({
// 	type: 'RESET'
// });

// store.dispatch({
// 	type: 'DECREMENT',
// 	by: 3
// });
