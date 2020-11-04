import React, { Component } from 'react';
import BoardItem from "../BoardItem/BoardItem";
import './Board.css';

class Board extends Component {
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    addItem() {
        let promptVar = window.prompt();
        console.log(promptVar);
        let newArr = this.state.items.slice();
        newArr.push(promptVar);
        console.log(newArr);
        this.setState({
            items: newArr,
        })
    }
    render() {
        return (
            <div className="board">
                <div className="board-name" style={{backgroundColor: this.props.color}}>
                    {this.props.name}
                </div>
                <ul className="board-items">
                {
                    this.props.items.map((item,i)=>{
                        return <BoardItem loc={this.props.loc} boardLength={this.props.length} name={item}
                        length={this.props.items.length} key={i} moveItemLeft={this.props.moveItemLeft.bind(this,i)}
                        moveItemRight={this.props.moveItemLeft.bind(this,i)}/>
                    })
                }
                </ul>
                <button onClick={this.props.addItem}>Add Item</button>
                
            </div>
        )
    }
}

export default Board;