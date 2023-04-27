import {RangeSliderModel} from './range-slider-model';
import {RangeSliderView} from './range-slider-view';

export default class RangeSliderController {

  model: RangeSliderModel
  view: RangeSliderView

    constructor(target: JQuery, options: Options) {
    this.model = new RangeSliderModel();
    this.view = new RangeSliderView();
    target.text(options.direction);
    console.log(options.direction)
  }

}