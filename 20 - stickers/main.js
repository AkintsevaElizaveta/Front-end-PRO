'use strict'

const STICKERS_CONTAINER_SELECTOR = '#stickersContainer'
const STICKER_SELECTOR = '.sticker';
const CREATE_NEW_STICKER_SELECTOR = '#createNewSticker'
const DELETE_BTN_SELECTOR = '.sticker__delete_btn';
const DESCRIPTION_AREA_SELECTOR = '.sticker__description';

const $stickersContainer = $(STICKERS_CONTAINER_SELECTOR);
const $rootContainer = $('#rootContainer')

$rootContainer.on('click', CREATE_NEW_STICKER_SELECTOR , onCreateNewStickerClick);
$stickersContainer.on('click', DELETE_BTN_SELECTOR, onDeleteBtnClick);
$stickersContainer.on('click',DESCRIPTION_AREA_SELECTOR, onDescriptionAreaClick);

StickersApi.getAll().then(renderStickers)

function onCreateNewStickerClick(){

    StickersApi.create()
        .then(newSticker => {
            renderSticker(newSticker)
        })
        .catch(showError);
}

function onDeleteBtnClick(e) {

    const $stickerEl = getSticker($(e.target));
    const $id = getIdBySticker($(e.target));

    StickersApi.delete($id).catch(showError);
    $stickerEl.remove();
}

function onDescriptionAreaClick(e){

    const $stickerEl = getSticker($(e.target))
    const id = $stickerEl[0].dataset.id;
    let $textAreaValue = $stickerEl[0].children[1].textContent;

    $($stickerEl[0].children[1]).on('change', function () {
        $textAreaValue = $(this).val();
        StickersApi.update(id, $textAreaValue)
            .catch(showError);
    })
}

function renderStickers(stickers) {
    const html = stickers.map(generateHtmlStickers).join('');
    $stickersContainer.append( html);
}

function renderSticker(sticker){
    const html = generateHtmlStickers(sticker);
    $stickersContainer.append(html);
}

function generateHtmlStickers(sticker){
    return ` 
        <div class="sticker" data-id="${sticker.id}">
            <button type="button" class="sticker__delete_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="sticker__delete_btn_icon"
                     viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <textarea name="description" id="description" class="sticker__description">${sticker.description}</textarea>
        </div>
    `;
}

function getIdBySticker($el){
    const $result = getSticker($el);
    return $result.data('id');
}

function getSticker($el) {
    return $el.closest(STICKER_SELECTOR);
}

function showError(e) {
    alert(e.message);
}