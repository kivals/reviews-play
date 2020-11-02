class Tooltip {
  name = 'tooltop';
  indent = 5;

  constructor() {
    this.el = document.createElement('div');
    this.el.style.position = 'absolute';
    this.el.classList.add(this.name);

    document.body.appendChild(this.el);

    this.listeners = [];
  }

  delegate(eventName, element, cssSelector, callback) {
    const fn = event => {
      if (!event.target.matches(cssSelector)) {
        return;
      }

      callback(event);
    };

    element.addEventListener(eventName, fn);
    this.listeners.push({ fn, element, eventName });

    return this;
  }

  onShow = (event) => {
    console.log('onShow');
  }

  onHide = () => {
    console.log('onHide');
  }

  attach(root) {
    this
      .delegate('event', root, '[data-tooltip]', this.onShow)
      .delegate('event', root, '[data-tooltip]', this.onHide);

  }

  detach() {

  }
}

const tooltip = new Tooltip();
tooltip.attach(document.body); 