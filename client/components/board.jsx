import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Row from './row.jsx';

class Board extends Component {

	constructor(props){
    super(props);
    this.state = {player: 1, available: []}
  }

  isAvailable(column, row){
    if(row === 5) return true;
    const coordinates = [column, row];
    let matched = false;
    this.state.available.map((arr) => {
      if(arr[0] === coordinates[0] && arr[1] === coordinates[1]) matched = true;
    });
    return matched;
  }
  
  changePlayer(hole){
    const column = hole.props.column;
    const row = hole.props.row;
    if(!hole.state.color && this.isAvailable(column, row)){
      const newlyAvailable = [column, row - 1];
      let available = this.state.available;
      let player = this.state.player;
      player === 1 ? player = 2 : player = 1;
      available.push(newlyAvailable);
      this.setState({player: player, available: available});
      return true;
    }
    else{
      return false;
    }
  }

  render(){
    let rows = [];
    for(var i = 0; i < 6; i++){
      rows.push(<Row row={i} player={this.state.player} changePlayer={this.changePlayer.bind(this)} key={i}/>)
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