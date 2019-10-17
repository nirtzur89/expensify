import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>info</h1>
		<p> here is your info: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			<p>im the higher order component</p>
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuth = (WrappedComponent) => {
	return (props) => <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>please log in!</p>}</div>;
};

const WithAdminWarning = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="your name is nir" />, document.getElementById('app'));
