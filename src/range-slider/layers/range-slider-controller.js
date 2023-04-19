import {RangeSliderModel} from './range-slider-model';
import {RangeSliderView} from './range-slider-view';

export class RangeSliderController {
  constructor(selector, model = new RangeSliderModel() ,view = new RangeSliderView(selector)) {
    this.model = model;
    this.view = view;
    this.view.elem = selector;
  }
}