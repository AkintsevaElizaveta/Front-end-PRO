import React from "react";
import Todo from "./Todo/Todo";
import style from './Todo/Todo.module.css'

function App() {
    return (
        <div className={style.root}>
            <Todo />
        </div>
    );
}

export default App;
