import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
	<div>
		<h1>Expense Manager</h1>
		<NavLink to="/" activeClassName="active-nav" exact={true}>
			Home
		</NavLink>
		<NavLink to="/add" activeClassName="active-nav">
			Add Expense
		</NavLink>
		<NavLink to="/edit" activeClassName="active-nav">
			Edit Expense
		</NavLink>
		<NavLink to="/help" activeClassName="active-nav">
			Help
		</NavLink>
	</div>
);

export default Header;
