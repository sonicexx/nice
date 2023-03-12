import { bindEvent, eventFormat } from './compiler/event';
import { stateFormat, statePool, stateUpdate } from './compiler/state';

export function useDOM(
  { template, state, methods }, //接收第一个参数：App() 的返回值
  rootDOM // 接收第二个参数：根节点
) {
  rootDOM.innerHTML = render(template, state);

  bindEvent(methods);
}

export function render(template, state) {
  template = eventFormat(template);
  template = stateFormat(template, state);

  return template;
}

export function DOMUpdate(mutatedData) {
  stateUpdate(mutatedData);
  const _state = statePool.filter(item => item.key === mutatedData.key)[0];
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    if (!el.dataset.mark) return;
    const data_mark = +el.dataset.mark;
    if (data_mark === _state.mark) {
      el.textContent = mutatedData.value;
    }
  });
  console.log('render-----------', statePool);
}
