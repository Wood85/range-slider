import { RangeSliderView } from "../layers/range-slider-view";

let view: RangeSliderView;

describe('сreateElement function', () => {

	view = new RangeSliderView();

	const res = view.createElement('div', { class: 'container' });

	test('should return div element with class container', () => {
		expect(res).not.toBeInstanceOf(HTMLInputElement)
		expect(res).toBeInstanceOf(HTMLDivElement)
		expect(res.classList.contains('container')).toEqual(true)
	})
});