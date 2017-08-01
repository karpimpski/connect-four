import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Row from './row.jsx';

class Board extends Component {

	constructor(props){
    super(props);
    this.state = {player: 1}
  }
  
  changePlayer(){
    let player = this.state.player;
    player === 1 ? player = 2 : player = 1;
    this.setState({player: player});
    console.log(this.state.player);
  }

  render(){
    let rows = [];
    for(var i = 0; i < 6; i++){
      rows.push(<Row player={this.state.player} changePlayer={() => this.changePlayer()} key={i}/>)
    }
    return (
    	<div>
        <p>Player: {this.state.player}</p>
        <div id='board'>
          {rows}
        </div>
      </div>
    );
  }
}

export default Board;