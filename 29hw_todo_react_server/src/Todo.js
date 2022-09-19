import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import UseTodo from "./UseTodo";


export default function Todo({ defaultMessage, defaultList}) {
    const [editTodo, setEditTodo] = useState();

    const { error, todos, onTodoFormSubmit, onDelete, onChange } = UseTodo(defaultList);

    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <Form
                key={editTodo?.id}
                editTodo={editTodo}
                onSubmit={onTodoFormSubmit}
                defaultMessage={defaultMessage}
            />
            <List
                todos={todos}
                onEdit={setEditTodo}
                onDelete={onDelete}
                onChange={onChange}
            />
        </>
    )
}