import React from 'react';

const TodoItem = (props) => {
    return(
        <div className='todo-item'>
            <input type="checkbox" 
                   onChange={() => console.log('changed')} 
                   checked={props.item.completed} 
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;