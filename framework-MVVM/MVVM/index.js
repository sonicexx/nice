export { useReactive } from './reactive'; // state-data 代理
export { useDOM } from './render'; // 总方法，接收用户 App 返回的 template、state、methods 作用到根节点上
export { eventFormat } from './compiler/event'; // 模板事件绑定方法 替换方法
export { stateFormat } from './compiler/state'; // 模板状态 替换方法
