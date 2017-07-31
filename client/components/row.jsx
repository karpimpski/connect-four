import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Row extends Component {

	constructor(props){
		super(props);
	}

  render(){
    let holes = [];
    for(var i = 0; i < 7; i++){
      holes.push(<div className='hole' key={i} />)
    }
    return (
    	<div className='row'>
            {holes}
        </div>
    );
  }
}

export default Row;