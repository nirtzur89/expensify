class DecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.removeOptions = this.removeOptions.bind(this);
		this.pickOption = this.pickOption.bind(this);
		this.addOption = this.addOption.bind(this);
		this.removeOption = this.removeOption.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
		this.state = {
			options: props.options
		};
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	removeOptions() {
		this.setState(() => ({ options: [] }));
	}

	removeOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	}

	pickOption() {
		const random = Math.floor(Math.random() * this.state.options.length);
		const chosen = this.state.options[random];
		alert('You need to to: ' + chosen);
	}

	addOption(option) {
		if (!option) {
			return 'please add a valid value';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option is already there';
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}

	render() {
		const title = 'Decider';
		const subtitle = 'let your computer decide for you';

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} pickOption={this.pickOption} />
				<Options
					options={this.state.options}
					removeOptions={this.removeOptions}
					removeOption={this.removeOption}
				/>
				<AddTask addOption={this.addOption} />
			</div>
		);
	}
}

DecisionApp.defaultProps = {
	options: []
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h3>{props.subtitle}</h3>
		</div>
	);
};

const Action = (props) => {
	return (
		<div>
			<button onClick={props.pickOption} disabled={!props.hasOptions}>
				Choose for me
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			{props.options.length === 0 && <p>Please add some options to get started</p>}
			{props.options.map((e) => <Option value={e} key={e} removeOption={props.removeOption} />)}
			<button onClick={props.removeOptions}>Remove options</button>
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			<p>{props.value}</p>
			<button
				onClick={(e) => {
					props.removeOption(props.value);
				}}
			>
				remove
			</button>
		</div>
	);
};

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: undefined
		};
		this.addOption = this.addOption.bind(this);
	}
	addOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);

		this.setState(() => ({ error }));

		if (!error) {
			e.target.elements.option.value = '';
		}
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.addOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<DecisionApp />, document.getElementById('app'));
