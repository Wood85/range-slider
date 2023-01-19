const getTemplate = () => {
  return`
    <div class="range-slider__thumb1"></div>
    <div class="range-slider__thumb2"></div>
  `
}

export class RangeSlider {
  constructor(selector, options) {
    this.elem = document.querySelector(selector);
    let thumb1 = this.elem.querySelector('.thumb1');
    let thumb2 = this.elem.querySelector('.thumb2');

    this.#render();
  }

  #render() {
    this.elem.classList.add('range-slider');
    this.elem.innerHTML = getTemplate();
  }



}