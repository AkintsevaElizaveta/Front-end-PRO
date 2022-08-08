'use strict'

const ALBUMS_LIST_SELECTOR = '#linksList';
const ALBUMS_ITEM_SELECTOR = '.links_container__item'
const IMAGES_CONTAINER_SELECTOR = '#imgContainer';

const albumsList = document.querySelector(ALBUMS_LIST_SELECTOR);
const imagesContainer = document.querySelector(IMAGES_CONTAINER_SELECTOR);

albumsList.addEventListener('click', onAlbumsListClick);

Albums.getList().then(renderAlbumsList).then(loadAlbums);

function onAlbumsListClick(e){
    e.preventDefault();

    const item = getListItem(e.target);
    const albumId = item.dataset.id;

    if(item){
        imagesContainer.innerHTML = '';
        imagesContainer.innerHTML = generateLoadingIndicator()
        Album.getImgByID(albumId).then(renderImgList);
    }
}

function renderAlbumsList(list) {
    const html = list.map(generateHtmlLinks).join('');
    albumsList.insertAdjacentHTML('beforeend', html);
}

function renderImgList(list) {
    imagesContainer.innerHTML = '';
    const html = list.map(generateImages).join('');
    imagesContainer.insertAdjacentHTML('beforeend', html);
}

function getListItem(el) {
    return el.closest(ALBUMS_ITEM_SELECTOR);
}

function loadAlbums() {
    Album.getImgByID(document.querySelector(ALBUMS_ITEM_SELECTOR).dataset.id).then(renderImgList);
}

function generateLoadingIndicator(){
    return `
    <div class="loader"></div>
    `
}

function generateHtmlLinks(link){
    return ` 
        <li class="links_container__item" data-id="${link.id}">
            <a class="links_container__link" href="https://jsonplaceholder.typicode.com/photos?albumId=${link.userId}">${link.title}</a>
        </li>
    `;
}

function generateImages(img){
    return `
    <li class="img_container__item">
        <img src="${img.url}" alt="${img.id}">
    </li>
    `
}