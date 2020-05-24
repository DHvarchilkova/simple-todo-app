import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {todo, todoIndex, deleteTodoHandler} = this.props;

        return (
            <div>
                <span>{todo}</span>
                <button onClick={() => deleteTodoHandler(todoIndex)}>X</button>
            </div>
        );
    }
}

export default TodoItem;
