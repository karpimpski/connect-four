import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hole from './hole.jsx';

class Row extends Component {

	constructor(props){
		super(props);
	}

  render(){
    let holes = [];
    for(var i = 0; i < 7; i++){
      holes.push(<Hole player={this.props.player} changePlayer={() => this.props.changePlayer()} key={i} />)
    }
    return (
    	<div className='row'>
        {holes}
      </div>
    );
  }
}

export default Row;