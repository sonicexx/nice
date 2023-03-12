/** MVVM
 * 创建驱动 VM ：ViewModel
 * M：数据保存和处理的层
 * V：View 视图
 */

// 导入 VM 驱动中的插件
import { useDOM, useReactive } from '../MVVM';

// 创建 App 返回 state-data、template-模板、methods-方法
function App() {
  //-----------Model 层----------//
  // 初始化 state-data：使用 useReactive 代理一下
  const state = useReactive({
    count: 0,
    name: '初始的名字',
    content: 'this is content',
  });

  // 创建事件绑定方法
  const add = num => {
    state.count += num;
  };
  const minus = num => {
    state.count -= num;
  };
  const changeName = name => {
    state.name = name;
  };

  // 导出：视图模板-template、数据-state、事件方法-methods
  return {
    //---------- View 层 ----------//
    template: `
            <h1>{{ count }}</h1>
            <h2>{{ name }}</h2>
            <h3>{{ content }}</h3>
            <button onClick="add(2)">+</button>
            <button onClick="minus(1)">-</button>
            <button onMouseup="changeName('niceeeeeeeee')">change name</button>
        `,
    state,
    methods: {
      add,
      minus,
      changeName,
    },
  };
}

useDOM(
  App(), //返回 state、methods、teplate
  document.getElementById('app') //将返回的值作用到该节点上
);
