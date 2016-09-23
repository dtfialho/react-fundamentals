import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor(){
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this);
	}

	update(){
		this.setState({ val: this.state.val + 1 });
	}

	componentWillMount(){
		console.log('montando');
	}

	render(){
		console.log('renderizando');
		return <button onClick={this.update}>{this.state.val}</button>;
	}

	componentDidMount(){
		console.log('montou');
	}

	componentWillUnmount(){
		console.log('leeeeeeeeeeeeeeeeeerrooooooooooooyyyyy jeeeeeeennnkiinnssss!');
	}
}

class Wrapper extends React.Component {
	constructor(){
		super();
	}

	mount(){
		ReactDOM.render(<App />, document.getElementById('a'));
	}

	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'));
	}

	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>UnMount</button>
				<div id="a"></div>
			</div>
		)
	}
}

export default Wrapper