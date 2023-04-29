interface Props {
  class?: string;
  type?: string;
  value?: string;
  min?: string;
  max?: string;
}

interface Options {
  orientation: string;
  isRange?: boolean;
  min?: number;
  max?: number;
  from?: number;
  to?: number;
}

interface JQuery {
  rangeSlider(options?: Options): JQuery;
}