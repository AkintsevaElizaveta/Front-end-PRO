class Tabs {
    static CLASS_BTN = 'tabs_item__btn';
    static CLASS_CONTENT = 'tabs_item__content';
    static CLASS_ACTIVE = 'tabs_item__btn_active';
    static CLASS_OPEN = 'tabs_item__content_open';

    #rootEl;
    #tabs;
    #contents;

    constructor(rootEl) {
        this.#rootEl = rootEl;
        this.#tabs = this.#rootEl.children[0];
        this.#contents = this.#rootEl.children[1];

        this.#bindStyles();
        this.#bindEvents();
        this.selectByIndex(0);
    }

    selectByIndex(index) {
        const currentContent = this.#findCurrentContentEl(index);
        Tabs.#openContent(currentContent);
        this.#highlightSelectedTab(index);
    }

    static #openContent(contentEl) {
        if (!contentEl.classList.contains(Tabs.CLASS_OPEN)){
            contentEl.classList.add(Tabs.CLASS_OPEN);
        }
    }

    static #hideContent(contentEl) {
        contentEl.classList.remove(Tabs.CLASS_OPEN);
    }

    #bindStyles() {
        for (const tab of this.#tabs.children) {
            tab.classList.add(Tabs.CLASS_BTN);
        }

        for (const content of this.#contents.children) {
            content.classList.add(Tabs.CLASS_CONTENT);
        }
    }

    #bindEvents() {
        this.#rootEl.addEventListener('click', (e) => this.#onRootElClick(e));
    }

    #onRootElClick(e) {
        const tab = e.target;
        if (tab.classList.contains(Tabs.CLASS_BTN)) {
            this.#showContent(tab);
        }
    }

    #showContent(tab) {
        const currentIndex = this.#findCurrentIndex(tab);
        const openContentEl = this.#findOpenContentEl();
        const currentContentEl = this.#findCurrentContentEl(currentIndex);

        if (openContentEl && openContentEl !== currentContentEl) {
            Tabs.#hideContent(openContentEl);
        }

        Tabs.#openContent(currentContentEl)
        this.#highlightSelectedTab(currentIndex);
    }

    #findOpenContentEl() {
        return this.#rootEl.querySelector(`.${Tabs.CLASS_OPEN}`);
    }

    #findCurrentIndex(tab) {
        const tabItems = [];
        tabItems.push(...this.#tabs.children)
        return tabItems.indexOf(tab);
    }

    #findCurrentContentEl(index) {
        return this.#contents.children[index];
    }

    #highlightSelectedTab(index) {
        for(let i = 0; i < this.#tabs.children.length; i++){
            if(i === index){
               this.#tabs.children[i].classList.add(Tabs.CLASS_ACTIVE);
            } else {
                this.#tabs.children[i].classList.remove(Tabs.CLASS_ACTIVE)
            }
        }
    }
}

export default Tabs;