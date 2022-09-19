import React from 'react';
import Todo from './Todo';
import './index.css';

function App() {
    const INITIAL_TODO_LIST = [
        {"title":"item 1", "status":true, "id":"1"},
        {"title":"item 2", "status":false, "id":"2"},
    ]

    return (
        <div className="App">
            <Todo defaultMessage={'NEW ITEM'} defaultList={INITIAL_TODO_LIST} />
        </div>
    )
}

export default App;