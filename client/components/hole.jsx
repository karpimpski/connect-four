import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hole extends Component {

	constructor(props){
		super(props);
		this.state = {color: false}
	}

	clickFunction(){
		if(this.props.changePlayer(this)){
			let color = this.state.color;
			this.props.player === 1 ? color = 'yellow' : color = 'red';
			this.setState({color: color});
		};
		
	}

  render(){
    return (
    	<div className={`hole`} style={{backgroundColor: this.state.color}} onClick={() => this.clickFunction()}></div>
    );
  }
}

export default Hole;