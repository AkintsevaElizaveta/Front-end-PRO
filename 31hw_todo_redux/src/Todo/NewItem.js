import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/actions/todo";
import style from './Todo.module.css'


export default function NewItem(
    {
        editTodo,
        defaultMessage,
        clearTodo
    }) {

    const dispatch = useDispatch();
    const [itemTitle, setItemTitle] = useState(editTodo?.title ?? defaultMessage);

    function onFormSubmit(e) {
        e.preventDefault();

        const newTodo = {
            status: false,
            ...itemTitle,
            title: itemTitle,
        };

        dispatch(createTodo(newTodo));
        setItemTitle('');
        clearTodo();

    }

    return (
        <form className={style.newMessageContainer} onSubmit={onFormSubmit}>
            <input className={style.input} value={itemTitle} onChange={e => setItemTitle(e.target.value)} required/>
            <button className={style.btn}>Додати</button>
        </form>
    )
}