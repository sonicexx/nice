import { isObject } from '../shared/utils';
import { mutableHandler } from './mutableHandler';

// 状态-state-data 的代理方法
export function useReactive(target) {
  // 接收传来的数据
  return createReactObject(target, mutableHandler);
}

// 状态监听
export function createReactObject(target, baseHandler) {
  if (!isObject) return target;
  const observer = new Proxy(target, baseHandler);
  return observer;
}
