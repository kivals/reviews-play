(function () {

  class Tooltip {
    constructor() {
      this.el = document.createElement('div');
      this.el.style.position = 'absolute';

      this.el.classList.add(this.name);
      document.body.appendChild(this.el);

      this.onHide = this.onHide.bind(this);
      this.onShow = this.onShow.bind(this);
    }

    get name() {
      return 'tooltip';
    }

    get indent() {
      return 5;
    }

    delegate(eventName, element, cssSelector, callback) {
      const fn = event => {
        if (!event.target.matches(cssSelector)) {
          return;
        }

        callback(event);
      };

      element.addEventListener(eventName, fn);

      return this;
    }

    onShow = (event) => {
      let target = event.target;

      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;
      this.el.innerHTML = tooltipHtml;

      let coords = target.getBoundingClientRect();

      let left = this.indent; //coords.left;
      if (left < 0) left = 0; // не заезжать за левый край окна
      this.el.classList.toggle('tooltip_active')

      let top = coords.top - this.el.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      this.el.style.left = left + 'px';
      this.el.style.top = top + 'px';
    }

    onHide() {
      this.el.classList.toggle('tooltip_active')
    }

    attach(root) {
      this
        .delegate('mouseover', root, '[data-tooltip]', this.onShow)
        .delegate('mouseout', root, '[data-tooltip]', this.onHide);
    }

    detach() {

    }
  }

  window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);