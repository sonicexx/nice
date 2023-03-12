import { randomNum } from '../shared/utils';

export const statePool = [];

export function stateFormat(template, state) {
  template = template.replace(
    /\<(.+?)\>\{\{(.+?)\}\}\<\/.+?\>/g,
    (node, tag, key) => {
      const _mark = randomNum();

      key = key.trim();
      statePool.push({
        mark: _mark,
        key: key,
        value: state[key],
      });
      return `<${tag} data-mark=${_mark}>${state[key]}</${tag}>`;
    }
  );
  return template;
}

export function stateUpdate(mutatedData) {
  statePool.forEach(item => {
    if (item.key === mutatedData.key) {
      item.value = mutatedData.value;
    }
  });
  console.log('state-----------', statePool);
}
