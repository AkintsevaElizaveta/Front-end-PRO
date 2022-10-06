import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../Api';


export default function Users() {
    const [users, setUsersList] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const params = 'users';

    function showError(e) {
        setError(e.message);
    };

    useEffect(() => {
        Api.getUsers(params)
            .then(setUsersList)
            .catch(showError);
    }, []);

    const allUsers = users.map((user) => {
        return (
            <li key={user.id}>
                {user.name}
                <button
                    onClick={() => {
                        navigate(`/albums?userId=${user.id}`);
                    }}
                    type="button">Show user's album
                </button>
            </li>
        );
    });

    return (
        <>
            {error ? <p>{error}</p> : ''}
            <ul>{allUsers}</ul>
        </>
    );
}