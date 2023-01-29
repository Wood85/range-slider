import {RangeSliderModel} from './range-slider-model';
import {RangeSliderView} from './range-slider-view';

export class RangeSliderController {
  constructor() {
    this.model = new RangeSliderModel();
    this.view = new RangeSliderView();
  }
}