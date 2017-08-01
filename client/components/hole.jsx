import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hole extends Component {

	constructor(props){
		super(props);
		this.state = {color: ''}
	}

	clickFunction(){
		let color = this.state.color;
		let player = this.props.player;
		if(player === 1){
			color = 'yellow';
		}
		else if(player === 2){
			color = 'red';
		}
		this.setState({color: color});
		this.props.changePlayer();
	}

  render(){
    return (
    	<div className={`hole`} style={{backgroundColor: this.state.color}} onClick={() => this.clickFunction()}></div>
    );
  }
}

export default Hole;