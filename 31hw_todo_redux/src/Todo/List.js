import React from "react";
import style from './Todo.module.css'
import {useDispatch} from "react-redux";
import {changeStatus, deleteItem} from "../store/actions/todo";

export default function List({ todos }) {
    const dispatch = useDispatch();

    function onDeleteClick(e, todo) {
        dispatch(deleteItem(todo.id));
    }

    function onChangeStatus(e, todo) {
       dispatch(changeStatus(todo.id))
    }

    return (
        <ul className={style.list}>
            {todos.map((todo, i) => (
                <li
                    key={todo.id}
                    className={`${style.item} ${todo.status ? style.done : ""}`}
                    onClick={e => onChangeStatus(e, todo)}
                >
                    <span className={style.item_title}>{todo.title}</span>
                    <button
                        className={style.btn}
                        onClick={e => onDeleteClick(e, todo)}
                    >Видалити</button>
                </li>
            ))}
        </ul>
    );
}