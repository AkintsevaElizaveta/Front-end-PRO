import React, {useState} from "react";

export default function Form({ editTodo, onSubmit, defaultMessage }) {
    const [message, setMessage] = useState(editTodo?.title ?? defaultMessage);

    function onFormSubmit(e) {
        e.preventDefault();

        const newTodo = {
            status: false,
            ...editTodo,
            title: message,
        };

        onSubmit(newTodo);
        setMessage('');
    }

    function onMessageChange(e) {
        setMessage(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit} className="newMessageContainer">
            <input
                className="input"
                value={message}
                onChange={onMessageChange}
                type="text"
                placeholder="NEW TODO"
            />
            <button className="btn">ADD</button>
        </form>
    );
}