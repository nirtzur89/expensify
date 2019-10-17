class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.plus = this.plus.bind(this);
		this.minus = this.minus.bind(this);
		this.reset = this.reset.bind(this);
		this.state = {
			count: 0
		};
	}

	plus() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	minus() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	reset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}

	render() {
		return (
			<div>
				<h1>count: {this.state.count}</h1>
				<button className="btn btn-success" onClick={this.plus}>
					+1
				</button>
				<button className="btn btn-danger" onClick={this.minus}>
					-1
				</button>
				<button className="btn btn-secondary" onClick={this.reset}>
					reset
				</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));
