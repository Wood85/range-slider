export class RangeSliderView {
  container: HTMLElement | null;

  constructor(){
    this.container = this.createElem('div', {class: 'range-slider'});
    this.createRangeSlider()
  }
  createElem(tag: string, props: Props) {
    let element: any;
    element = document.createElement(tag);
    element.classList.add(props.class);
    element.type = props.type;
    element.setAttribute('value', props.value);
    element.setAttribute('min', props.min);
    element.setAttribute('max', props.max);

    return element
  }

  createRangeSlider() {

      if(this.container !== null){
          const values: HTMLElement = this.createElem('div', {class: 'range-slider__values'});
          const slider: HTMLElement = this.createElem('div', {class: 'range-slider__slider'});
          const range: HTMLElement = this.createElem('div', {class: 'range-slider__range'});
          const inputMin: HTMLInputElement = this.createElem('input', {
            class: 'value__input_min',
            type: 'number',
            value: '2500'
          });
          const inputMax: HTMLInputElement = this.createElem('input', {
            class: 'value__input_max',
            type: 'number',
            value: '7500'
          });
          const progress: HTMLElement = this.createElem('div', {class: 'slider__progress'});
          const leftRunner: HTMLInputElement = this.createElem('input', {
              class: 'range__runner_left',
              type: 'range',
              value: '2500',
              min:'0',
              max: '1000'
          });
          const rightRunner: HTMLInputElement = this.createElem('input', {
              class: 'range__runner_right',
              type: 'range',
              value: '7500',
              min:'0',
              max: '1000'
          });


          values.append(inputMin, inputMax);
          slider.append(progress);
          range.append(leftRunner, rightRunner)
          this.container.append(values, slider, range);
      }
  }

}
