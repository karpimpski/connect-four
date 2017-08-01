import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import Board from './board.jsx';

class Index extends Component {

	constructor(props){
		super(props);
	}

  render(){
    return (
    	<Board />
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));