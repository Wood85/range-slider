export class RangeSliderView {
	container: HTMLElement | null;

	constructor() {
		this.container = this.createElement('div', { class: 'container' });
		this.createRangeSlider();
	}

	createElement(tag: string, props?: Props) {
		let element: any;
		element = document.createElement(tag);
		if (props.class) element.classList.add(props.class);
		if (props.type) element.type = props.type;
		if (props.min) element.setAttribute('min', props.min);
		if (props.max) element.setAttribute('max', props.max);
		if (props.value) element.setAttribute('value', props.value);

		return element
	}

	createRangeSlider() {

		if (this.container !== null) {
			const value: HTMLElement = this.createElement('div', { class: 'value' });
			const rangeSlider: HTMLElement = this.createElement('div', { class: 'range-slider' });
			const slider: HTMLElement = this.createElement('div', { class: 'slider' });
			const range: HTMLElement = this.createElement('div', { class: 'range' });
			const inputMin: HTMLInputElement = this.createElement('input', {
				class: 'value__input',
				type: 'number',
				value: '2500'
			});
			inputMin.classList.add('value__input_min');
			const inputMax: HTMLInputElement = this.createElement('input', {
				class: 'value__input',
				type: 'number',
				value: '7500'
			});
			inputMax.classList.add('value__input_max');
			const separator: HTMLElement = this.createElement('div', { class: 'value__separator' });
			separator.textContent = '-';
			const progress: HTMLElement = this.createElement('div', { class: 'slider__progress' });
			const leftRunner: HTMLInputElement = this.createElement('input', {
				class: 'range__runner',
				type: 'range',
				min: '0',
				max: '10000',
				value: '2500'
			});
			leftRunner.classList.add('range__runner_left');
			const rightRunner: HTMLInputElement = this.createElement('input', {
				class: 'range__runner',
				type: 'range',
				min: '0',
				max: '10000',
				value: '7500'
			});
			rightRunner.classList.add('range__runner_right');


			value.append(inputMin, separator, inputMax);
			slider.append(progress);
			range.append(leftRunner, rightRunner);
			rangeSlider.append(slider, range);
			this.container.append(value, rangeSlider);
		}
	}


	// handlerInput() {
	//     this.rangeRunners
	// }

}
