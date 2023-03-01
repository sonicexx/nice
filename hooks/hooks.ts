// 定义 hooks 函数的类型
interface IUseHooks {
  hook1: () => void; // 方法 1 的类型
  hook2: (params: string) => string; // 方法 2 的类型
}

// 定义 hooks 函数
function useHooks(): IUseHooks {
  // 定义 hook1 函数
  const hook1 = () => {
    console.log('hook1');
  };
  // 定义 hook2 函数
  const hook2 = (params: string) => params + '---hook2 处理';

  // 将 hook1 和 hook2 返回出去
  return { hook1, hook2 };
}

// 导出 hooks 函数
export { useHooks, IUseHooks };
