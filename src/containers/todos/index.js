import React, {Component} from 'react';

import TodoItem from './todoItem';
import NewTodo from "../NewTodo";

class Todos extends Component {
    state = {
        todos: [
            'read all the instructions',
            'watch the video',
            'create the TodoList app',
            'be creative and try something new'
        ]
    };

    addNewTodo = (todo) => {
        const newTodos = this.state.todos.concat(todo);

        this.setState({
            todos: newTodos
        })
    };

    deleteTodoHandler = (todoDeleteIndex) => {
        const newTodos = this.state.todos.filter((filter, TodoIndex) => todoDeleteIndex !== TodoIndex);
        this.setState({todos: newTodos});
    };

    renderTodos = () => {
        return this.state.todos.map((todo, index) => {
            return <TodoItem
                key={todo}
                todo={todo}
                todoIndex={index}
                deleteTodoHandler={this.deleteTodoHandler}
            />
        })
    };

    render() {
        return (
            <>
                {this.renderTodos()}
                <NewTodo addNewTodo={this.addNewTodo}/>
            </>
        )
    }
}

export default Todos;
