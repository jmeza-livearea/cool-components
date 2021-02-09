'use strict'

class CoolGallery extends HTMLElement {
  constructor() {
    super();
    this.images = JSON.parse(this.getAttribute('images'));
    this.currentIndex = 0;
    this.render = this.render.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  connectedCallback() {
    console.log('Hello cool gallery world 0.0.1');
    this.render();
  }

  // Increment current Index
  nextImage() {
    this.currentIndex === this.images.length - 1 ? this.currentIndex = 0 : this.currentIndex++;
    this.render();
  }

  // Decrement current index
  previousImage() {
    this.currentIndex === 0 ? this.currentIndex = this.images.length - 1 : this.currentIndex--;
    this.render();
  }

  __createImageElement(image) {
    return `<img src="${image}" />`;
  }

  render() {
    this.innerHTML = ` 
      <h2> HELLO COOL GALLERY WOLRD! </h2>
      <img src="${this.images[this.currentIndex]}" />
      <button id="cool-gallery-previous-button"> Previous </button>
      <button id="cool-gallery-next-button"> Next </button>
    `;

    document.getElementById('cool-gallery-previous-button').addEventListener('click', this.previousImage);
    document.getElementById('cool-gallery-next-button').addEventListener('click', this.nextImage);
  }
}

customElements.define('cool-gallery', CoolGallery);