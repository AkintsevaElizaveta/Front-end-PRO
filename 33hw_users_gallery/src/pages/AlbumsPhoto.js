import React, { useState, useEffect }  from 'react';
import { useSearchParams} from 'react-router-dom';
import Api from '../Api';

export default function AlbumsPhoto() {
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState('');
    const [searchParams] = useSearchParams();
    const albumId = searchParams.get('albumId');
    const params = `photos?albumId=${albumId}`;

    function showError(e) {
        setError(e.message);
    }

    useEffect(() => {
        if (albumId) {
            Api.getPhotos(params)
                .then(setPhotos)
                .catch(showError);
        }
    }, [albumId, params]);

    const photoList = photos.map((photo) => {
        return (<li>
                <img key={photo.id} src={photo.url} />
        </li>

        );
    });

    return (
        <>
            {error ? <p >{error}</p> : ''}
            <ul>{photoList}</ul>
        </>
    );
}