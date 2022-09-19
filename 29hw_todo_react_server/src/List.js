import React from "react";

export default function List({ todos, onEdit, onDelete, onChange }) {

    function onEditClick(e, todo) {
        e.stopPropagation();

        onEdit(todo);
    }

    function onDeleteClick(e, todo) {
        e.stopPropagation();

        onDelete(todo.id);
    }

    function onChangeStatus(e, todo) {
        e.stopPropagation();

        todo.status = !todo.status

        onChange(todo.id, todo);
    }

    return (
        <ul id="list">
            {todos.map((todo, i) => (
                <li
                    key={todo.id}
                    className={`item ${todo.status ? "done" : ""}`}
                    onClick={e => onChangeStatus(e, todo)}
                >
                   <span className="item_title"> {todo.title}</span>
                    <button
                        className="btn"
                        onClick={e => onEditClick(e, todo)}
                    >EDIT</button>
                    <button
                        className="btn"
                        onClick={e => onDeleteClick(e, todo)}
                    >DELETE</button>
                </li>
            ))}
        </ul>
    );
}