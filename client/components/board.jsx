import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Row from './row.jsx';

class Board extends Component {

	constructor(props){
    super(props);
    this.state = {player: 1, available: []}
  }

  isAvailable(hole){
    if(hole.props.row === 5){
      this.changePlayer(hole);
      return true;
    }

    let matched = false;
    this.state.available.map((arr) => {
      if(arr[0] === hole.props.column && arr[1] === hole.props.row) matched = true;
    });

    if(matched && !hole.state.color) this.changePlayer(hole);

    return matched && !hole.state.color;
  }
  
  changePlayer(hole){
    const newlyAvailable = [hole.props.column, hole.props.row - 1];
    let available = this.state.available;
    let player = this.state.player;
    player === 1 ? player = 2 : player = 1;
    available.push(newlyAvailable);
    this.setState({player: player, available: available});
  }

  render(){
    let rows = [];
    for(var i = 0; i < 6; i++){
      rows.push(<Row row={i} player={this.state.player} isAvailable={this.isAvailable.bind(this)} key={i}/>)
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