import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Row from './row.jsx';

class Board extends Component {

	constructor(props){
		super(props);
	}

  render(){
    let rows = [];
    for(var i = 0; i < 6; i++){
      rows.push(<Row key={i}/>)
    }
    return (
    	<div id='board'>
        {rows}
      </div>
    );
  }
}

export default Board;