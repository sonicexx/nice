// 导入 hooks 函数 和 hooks 类型
import { IUseHooks, useHooks } from './hooks';

// 将 hook1 和 hook2 从 hooks 函数的返回值中解构出来
const { hook1, hook2 }: IUseHooks = useHooks();

// 执行 hook1 方法
hook1(); // hook1

// 执行 hook2 方法：将值的类型定义为-IUseHooks 类型中 hook2 方法的返回值的类型
const a: ReturnType<IUseHooks['hook2']> = hook2('params');

// 打印 a 的值
console.log(a); // params---hook2 处理
