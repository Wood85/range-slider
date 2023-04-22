export class RangeSliderView {
  elem: HTMLElement | null
  slider: HTMLElement | null
  thumb1: HTMLElement | null
  thumb2: HTMLElement | null

  constructor(selector: string) {
    this.elem = this.getElement(selector);
    this.slider = this.createElement('div', 'slider');
    this.thumb1 = this.createElement('div', 'slider__thumb1');
    this.thumb2 = this.createElement('div', 'slider__thumb2');

    this.slider.append(this.thumb1, this.thumb2);
    this.elem.append(this.slider);

  }

  createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  getElement(selector: string): HTMLElement {
    const element: any = document.querySelector(selector);

    return element;
  }

}