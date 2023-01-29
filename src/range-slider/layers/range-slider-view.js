export class RangeSliderView {
  constructor() {
    this.rangeSlider = this.getElement('#range-slider');
    this.slider = this.createElement('div', 'slider');
    this.thumb1 = this.createElement('div', 'slider__thumb1');
    this.thumb2 = this.createElement('div', 'slider__thumb2');

    this.slider.append(this.thumb1, this.thumb2);
    this.rangeSlider.append(this.slider);

  }

  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }

}