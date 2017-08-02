import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Row from './row.jsx';

class Board extends Component {

	constructor(props){
    super(props);
    this.state = {player: 1, taken: []}
  }

  isAvailable(hole){
    if(hole.props.row === 5){
      this.changePlayer(hole);
      return true;
    }

    let matched = false;
    this.state.taken.map((arr) => {
      if(arr[0] === hole.props.column && arr[1] - 1 === hole.props.row) matched = true;
    });

    if(matched && !hole.state.color) this.changePlayer(hole);

    return matched && !hole.state.color;
  }
  
  changePlayer(hole){
    this.checkVictory(hole);
    const newlyTaken = [hole.props.column, hole.props.row, hole.props.player];
    let taken = this.state.taken;
    let player = this.state.player;
    player === 1 ? player = 2 : player = 1;
    taken.push(newlyTaken);
    this.setState({player: player, taken: taken});
  }

  checkVictory(hole){
    const combinations = [ [1,0], [-1, 0], [0,1], [0,-1], [1,1], [-1,-1], [-1,1], [1,-1] ]
    for(let i = 0; i < combinations.length; i++){
      if(this.checkDirection(hole,combinations[i][0], combinations[i][1])){
        break;
      }
    }
  }

  checkDirection(hole, changeColumn, changeRow, numberCompleted=1){
    const currentColumn = hole.props.column + (changeColumn * numberCompleted);
    const currentRow = hole.props.row + (changeRow * numberCompleted);
    this.state.taken.map((arr) => {
      let matched = arr[0] == currentColumn && arr[1] == currentRow && arr[2] === hole.props.player;
      if(matched){
        if(numberCompleted === 3){
          console.log('victory!');
          return true;
        }
        else{
          this.checkDirection(hole, changeColumn, changeRow, numberCompleted + 1);
        }
      }
      else{
        return false;
      }
    });
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