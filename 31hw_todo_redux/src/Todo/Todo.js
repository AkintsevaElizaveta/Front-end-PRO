import React, {useState} from "react";
import List from "./List";
import {useSelector} from "react-redux";
import NewItem from "./NewItem";


export default function Todo() {
    const todos = useSelector(state => state.todos);
    const [editTodo, setEditTodo] = useState();

    return (
        <>
            <NewItem
                key={editTodo?.id}
                editTodo={editTodo}
                clearTodo={() => setEditTodo(undefined)}
            />
            <List
                todos={todos}
            />
        </>
    )
}