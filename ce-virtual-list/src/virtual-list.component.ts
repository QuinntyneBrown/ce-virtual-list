const htmlTemplate = require("./virtual-list.component.html");
const styles = require("./virtual-list.component.scss");

const template = document.createElement("template");
template.innerHTML = `${htmlTemplate}<style>${styles}</style>`;

export class VirtualListComponent extends HTMLElement {
    constructor(
        private _scroller: HTMLElement,
        private _source: any,
        private _document: Document = document,
        private _window: Window = window) {
        super();
        this._onScroll = this._onScroll.bind(this);
        this._onResize = this._onResize.bind(this);
    }
    
    public fetch(count: number) {
    }

    public createToombstone() {

    }

    public render(item, div) {

    }

    public anchorItem = {
        index: 0,
        offset: 0
    }

    private _firstAttachedItem = 0;

    private _lastAttachedItem = 0;

    private _anchorScrollTop = 0;

    private _tombstoneSize = 0;

    private _tombstoneWidth = 0;

    private _tombstones = [];

    private _loadedItems = 0;

    private _scrollRunway: HTMLElement;

    private _requestInProgress: boolean = false;

    private _scrollRunwayEnd: number = 0;

    private _items: Array<any> = [];

    private _onScroll() {

    }

    private _onResize() {
        var tombstone = this._source.createTombstone();
        tombstone.style.position = 'absolute';
        this._scroller.appendChild(tombstone);
        tombstone.classList.remove('invisible');
        this._tombstoneSize = tombstone.offsetHeight;
        this._tombstoneWidth = tombstone.offsetWidth;
        this._scroller.removeChild(tombstone);

        for (var i = 0; i < this._items.length; i++) {
            this._items[i].height = this._items[i].width = 0;
        }

        this._onScroll();
    }

    static get observedAttributes () {
        return [];
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(document.importNode(template.content, true));  
        this._bind();
        this._setEventListeners();        
    }

    private async _bind() {
        this._scrollRunway = this._document.createElement('div');
        this._scrollRunway = document.createElement('div');
        this._scrollRunway.textContent = ' ';
        this._scrollRunwayEnd = 0;
        this._scrollRunway.style.position = 'absolute';
        this._scrollRunway.style.height = '1px';
        this._scrollRunway.style.width = '1px';
        this._scrollRunway.style.transition = 'transform 0.2s';
        this._scroller.appendChild(this._scrollRunway);
        this._onResize();

    }

    private _setEventListeners() {
        this._scroller.addEventListener('scroll', this._onScroll);
        this._window.addEventListener('resize', this._onResize);
    }

    disconnectedCallback() {

    }

    attributeChangedCallback (name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}

customElements.define(`ce-virtual-list`,VirtualListComponent);
