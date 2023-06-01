import RangeSliderController from './layers/range-slider-controller';

(function ($: JQueryStatic): void {
  $.fn.rangeSlider = function (this: JQuery, options?: Options): JQuery {
    const defaults: Options = {
      orientation: 'horizontal',
    };

    return this.each(function () {
      $.data(this, 'range', new RangeSliderController($(this), $.extend({}, defaults, options)));
    });
  };
})($);

