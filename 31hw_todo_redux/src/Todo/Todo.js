import React, { } from "react";
import List from "./List";
import {useSelector} from "react-redux";


export default function Todo() {
    const todos = useSelector(state => state.todos);

    return (
        <>
            <List
                todos={todos}
            />
        </>
    )
}