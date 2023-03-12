import { randomNum } from '../shared/utils';

const reg_onClick = /\ on(.*?)\=\"(.+?)\"/g;

const eventPool = [];
export function eventFormat(template) {
  return template.replace(reg_onClick, function (node, type, handler) {
    const _mark = randomNum();
    type = type.toLowerCase();

    eventPool.push({
      mark: _mark,
      handler: handler,
      type,
    });

    return ` dom-mark=${_mark}`;
  });
}

export function bindEvent(methods) {
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    const dom_mark = +el.getAttribute('dom-mark');
    if (!dom_mark) return;
    eventPool.forEach(event => {
      if (event.mark !== dom_mark) return;
      // console.log(event.handler.match(/(.*?)\(/)[1]);
      // console.log(event.handler.match(/\((.*?)\)/)[1]);

      const fnName = event.handler.match(/^(.*?)\(/)[1];
      const argu = event.handler.match(/\((.*?)\)/)[1];

      el.addEventListener(
        event.type,
        _bindIt.bind(this, methods, fnName, argu),
        false
      );
    });
  });
}

function _bindIt(methods, fnName, argu) {
  argu = isNaN(+argu) ? argu.replace(/['|"]/g, '') : +argu;
  methods[fnName](argu);
}
