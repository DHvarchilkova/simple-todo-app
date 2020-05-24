import React, {Component} from 'react';

class NewTodo extends Component {
    state = {
        newTodo: '',
    };

    addTodo = (e) => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);

        this.setState({
            newTodo: ''
        })
    };

    addNewTodoHandler = (e) => {
        const newTodoText = e.currentTarget.value;

        this.setState({
            newTodo: newTodoText,
        });

    };
    render() {
        return (
            <>
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        value={this.state.newTodo}
                        onChange={this.addNewTodoHandler}
                    />
                </form>
                <button onClick={this.addTodo}>Add new Todo</button>
            </>
        );
    }
}

export default NewTodo;
