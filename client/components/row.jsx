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
      holes.push(<Hole row={this.props.row} column={i} player={this.props.player} isAvailable={this.props.isAvailable} key={i} />)
    }
    return (
    	<div className='row'>
        {holes}
      </div>
    );
  }
}

export default Row;