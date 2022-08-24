class LinksView {
    static ALBUMS_LIST_SELECTOR = '#linksList';
    static ALBUMS_ITEM_SELECTOR = '.links_container__item'


    #$list;
    #options;

    constructor(options) {
        this.#$list = $(LinksView.ALBUMS_LIST_SELECTOR)
            .on('click', LinksView.ALBUMS_ITEM_SELECTOR, (e) => this.onAlbumsListClick(e))

        this.#options = options;
    }

    onAlbumsListClick(e){
        e.preventDefault();

        const id = this.getAlbumId(e.target);

        this.#options.onSelect(id);
    }

    renderAlbumsList(list) {
        const html = list.map(list => this.generateHtmlLinks(list)).join('');

        this.#$list.html(html);
    }

    appendTo($el) {
        $el.append(this.#$list);
    }

    getAlbumId(el) {
        return el.closest(LinksView.ALBUMS_ITEM_SELECTOR)?.dataset.id;
    }

    generateHtmlLinks(link){
        return ` 
        <li class="links_container__item" data-id="${link.id}">
            <a class="links_container__link" href="https://jsonplaceholder.typicode.com/photos?albumId=${link.userId}">${link.title}</a>
        </li>
    `;
    }
}