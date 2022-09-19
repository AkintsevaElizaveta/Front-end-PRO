import {useEffect, useState} from "react";
import TodoApi from "./TodoApi";

export default function UseTodo(defaultList) {
    const [error, setError] = useState('');
    const [todos, setTodo] = useState(defaultList);

    function showError(e) {
        setError(e.message);
    }

    useEffect(() => {
        TodoApi.getList()
            .then(setTodo)
            .catch(showError);
    }, [])

    function onTodoFormSubmit(todo) {
        if (todo.id) {
            TodoApi.update(todo.id, todo)
                .then((newTodo) => {
                    const newList = todos.map(todoItem => todoItem.id === newTodo.id ? newTodo : todoItem)

                    setTodo(newList);

                })
                .catch(showError);
        } else {
            TodoApi.create(todo)
                .then(newTodo => {
                    setTodo([...todos, newTodo]);
                })
                .catch(showError);
        }
    }

    function onDelete(id) {
        TodoApi.delete(id)
            .then(() => {
                setTodo(todos.filter(item => item.id !== id))
            })
            .catch(showError);
    }

    function onChange(id, todo){
        TodoApi.update(id, todo)
            .then((newTodo) => {
                const newList = todos.map(todoItem => todoItem.id === newTodo.id ? newTodo : todoItem);

                setTodo(newList);
            })
            .catch(showError)
    }

    return { error, todos, onTodoFormSubmit, onDelete, onChange };
}