import React, { useState, useEffect }  from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Api from '../Api';

export default function UsersAlbum() {
    const [searchParams] = useSearchParams();
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const userId = searchParams.get('userId');
    const params = `albums?userId=${userId}`;

    function showError(e) {
        setError(e.message);
    };

    useEffect(() => {
        if (userId) {
            Api.getAlbums(params)
                .then(setAlbums)
                .catch(showError);
        }
    }, [userId, params]);

    const albumList = albums.map((album) => {
        return (
            <li key={album.id}>
               {album.title}
                <button
                    onClick={() => {navigate(`/photos?albumId=${album.id}`)}}
                >Show photo
                </button>
            </li>
        );
    });

    return (
        <>
            {error ? <p >{error}</p> : ''}
            <ul>{albumList}</ul>
        </>
    );
}