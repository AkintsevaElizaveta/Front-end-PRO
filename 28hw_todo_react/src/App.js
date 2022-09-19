import React, { useState } from 'react';
import './index.css';


function Todo() {
    const [message, setMessage] = useState('');
    const [items, setItem] = useState([
        'ITEM 1',
        'ITEM 2',
    ]);

    function onAddBtnClick() {
        if(message !== '' && message !== ' '){
            setItem([...items, message]);
        }
        else alert('Empty field')

        setMessage('');
    }

    function onMessageChange(e) {
        setMessage(e.target.value);
    }

    function CreateNewItem(){
        return (
            <>
                <div className="newMessageContainer">
                    <input className={"input"} value={message} onChange={onMessageChange} type="text" placeholder="NEW TODO" />
                    <button id="addBtn" onClick={onAddBtnClick}>ADD</button>
                </div>
            </>
        )
    }

    return (
        <>
            {CreateNewItem()}
            <ul id="list">
                {items.map((item, i) => <li className={"item"} key={i}>{item}</li>)}
            </ul>
        </>
    )
}


function App() {
    return <Todo />;

}

export default App;
