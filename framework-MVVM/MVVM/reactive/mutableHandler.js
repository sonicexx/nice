import { useReactive } from '.';
import { DOMUpdate } from '../render';
import { hasOwnProperty, isEqual, isObject } from '../shared/utils';

const get = createGetter(),
  set = createSetter();

function createGetter() {
  return function (t, k, r) {
    // console.log('响应式获取：', t[k]);

    // 递归深度代理：如果代理的值还为对象继续代理
    const res = Reflect.get(t, k, r);
    if (isObject(res)) {
      return useReactive(res);
    }
    return res;
  };
}
function createSetter() {
  return function (t, k, newVal, r) {
    const iskeyExist = hasOwnProperty(t, k),
      oldVal = t[k],
      res = Reflect.set(t, k, newVal, r); //???? 返回值类型 Boolean ，成功 true
    if (!iskeyExist) {
      console.log('响应式新增：', { [k]: newVal });
    } else if (!isEqual(oldVal, newVal)) {
      console.log('响应式修改：', { [k]: newVal });

      // View update
      DOMUpdate({ key: k, value: newVal });
    }
    return res;
  };
}

export const mutableHandler = {
  get,
  set,
};
