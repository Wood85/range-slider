export class RangeSliderView {
  container: HTMLElement | null;

  constructor(){
    this.container = this.createElem('div', {class: 'range-slider'});
    this.createRangeSlider()
  }
  createElem(tag: string, props: Props) {
    let element: any;
    element = document.createElement(tag);
    if(props.class) element.classList.add(props.class);
    if(props.type)element.type = props.type;
    if(props.value)element.setAttribute('value', props.value);
    if(props.min)element.setAttribute('min', props.min);
    if(props.max)element.setAttribute('max', props.max);

    return element
  }

  createRangeSlider() {

      if(this.container !== null){
          const values: HTMLElement = this.createElem('div', {class: 'values'});
          const slider: HTMLElement = this.createElem('div', {class: 'slider'});
          const range: HTMLElement = this.createElem('div', {class: 'range'});
          const inputMin: HTMLInputElement = this.createElem('input', {
            class: 'values__input',
            type: 'number',
            value: '2500'
          });
          inputMin.classList.add('values__input_min');
          const inputMax: HTMLInputElement = this.createElem('input', {
            class: 'values__input',
            type: 'number',
            value: '7500'
          });
          inputMax.classList.add('values__input_max');
          const separator: HTMLElement = this.createElem('div',{class: 'values__separator'});
          separator.textContent = '-';
          const progress: HTMLElement = this.createElem('div', {class: 'slider__progress'});
          const leftRunner: HTMLInputElement = this.createElem('input', {
              class: 'range__runner',
              type: 'range',
              value: '2500',
              min:'0',
              max: '1000'
          });
          leftRunner.classList.add('range__runner_left');
          const rightRunner: HTMLInputElement = this.createElem('input', {
              class: 'range__runner',
              type: 'range',
              value: '7500',
              min:'0',
              max: '1000'
          });
          rightRunner.classList.add('range__runner_right');


          values.append(inputMin, separator, inputMax);
          slider.append(progress);
          range.append(leftRunner, rightRunner)
          this.container.append(values, slider, range);
      }
  }

}
