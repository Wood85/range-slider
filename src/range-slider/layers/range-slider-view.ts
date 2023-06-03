export class RangeSliderView {
	container: HTMLElement | null;

	constructor() {
		this.container = this.createElement('div', { class: 'container' });
		this.renderRangeSlider();
		this.handlerInput();
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

	renderRangeSlider() {

		if (this.container !== null) {
			const value: HTMLDivElement = this.createElement('div', { class: 'value' });
			const rangeSlider: HTMLDivElement = this.createElement('div', { class: 'range-slider' });
			const slider: HTMLDivElement = this.createElement('div', { class: 'slider' });
			const range: HTMLDivElement = this.createElement('div', { class: 'range' });
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
			const separator: HTMLDivElement = this.createElement('div', { class: 'value__separator' });
			separator.textContent = '-';
			const progress: HTMLDivElement = this.createElement('div', { class: 'slider__progress' });
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


	handlerInput() {
		const rangeRunners = document.querySelectorAll('.range__runner'),
			valueInputs = document.querySelectorAll('.value__input'),
			progress = document.querySelector('.slider__progress');
		let gapVal = 1;

		rangeRunners.forEach(runner => {
			runner.addEventListener('input', event => {
				let minVal = parseInt(rangeRunners[0].value, 10),
					maxVal = parseInt(rangeRunners[1].value, 10);

				if (maxVal - minVal < gapVal) {
					if (event.target.className === 'range__runner_left') {
						rangeRunners[0].value = maxVal - gapVal;
					} else {
						rangeRunners[1].value = minVal + gapVal;
					}
				} else {
					valueInputs[0].value = minVal;
					valueInputs[1].value = maxVal;
					progress.style.left = (minVal / rangeRunners[0].max) * 100 + '%';
					progress.style.right = 100 - (maxVal / rangeRunners[1].max) * 100 + '%'
				}
			})
		})

	}

}
