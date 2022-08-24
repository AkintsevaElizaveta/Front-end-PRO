class AlbumsView{
    static IMAGES_CONTAINER_SELECTOR = '#imgContainer';

    #$gallery

    constructor() {
        this.#$gallery = $(AlbumsView.IMAGES_CONTAINER_SELECTOR)
    }

    appendTo($el) {
        $el.append(this.#$gallery);
    }

    renderImgList(gallery) {
        this.#$gallery.innerHTML = '';

        const html = gallery.map(gallery => this.generateImages(gallery)).join('');

        this.#$gallery.html(html)
    }

    generateImages(img){
        return `
    <li class="img_container__item">
        <img src="${img.url}" alt="${img.id}">
    </li>
    `
    }
}