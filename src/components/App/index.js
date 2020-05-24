import React, {Component} from 'react';

import Todos from "../../containers/todos";
import NewTodo from "../../containers/NewTodo";

export class App extends Component {
    render() {
        return (
            <>
                <Todos/>
            </>
        )
    }
}

