import {RangeSliderController} from './range-slider-controller';

 export class RangeSliderView {
  constructor(selector, options) {
    this.controller = new RangeSliderController();

    this.elem = document.querySelector(selector);
    this.options = options;


    this.#render();
  }

  #render() {
    const {quantity} = this.options;
    this.elem.classList.add('range-slider');
    this.thumb1 = document.createElement('div');
    this.thumb1.classList.add('range-slider__thumb1');
    this.thumb2 = document.createElement('div');
    this.thumb2.classList.add('range-slider__thumb2');
    this.elem.appendChild(this.thumb1);

    if (quantity === 2) {
      this.elem.appendChild(this.thumb2);
    }
  }
}