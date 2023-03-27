/**
 * 深克隆：
 *  WeakMap: 设置对象映射 => 相当于键名为 对象类型的 对象
 *  instanceof: 查看构造函数是否出现在对象的原型链上的任何位置
 */
const originObj = {
  name: 'nice',
  isUnd: undefined,
  age: 18,
  son: {
    first: 'nice1',
    seconde: 'nice2',
    arr: [
      {
        a: 1,
        b: [1, 2, 3],
      },
      {
        c: { c: 'c', d: { d: 'd' } },
      },
    ],
  },
  arr: [[1, 2], 1, 2, 3, 4, 10],
  isNull: null,
  isFn: () => {
    console.log('oriObj');
  },
};

// -------复制堆内存地址
const obj2 = originObj;

// -------浅拷贝：只修改第一层属性不会互相影响
const obj3 = {};
for (let k in originObj) {
  obj3[k] = originObj[k];
}

// -------深拷贝：
function deepClone(ori, hashMap = new WeakMap()) {
  // **** 准备工作
  // 被拷贝对象是否是原始类型 || 函数方法
  if (!(ori instanceof Object) || ori instanceof Function) return ori;

  // 是对象
  // 是否是 Date、RegExp
  if (ori instanceof Date) return new Date(ori);
  if (ori instanceof RegExp) return new RegExp(ori);

  // --- 防循环赋值：判断被拷贝对象的 WeakMap 中是后已经存入映射
  const hashKey = hashMap.get(ori);
  if (hashKey) return ori;
  // --- 改被拷贝对象有了映射，就返回

  // **** 准备拷贝对象
  // 借用 ori 构造函数创建对象
  const tar = new ori.constructor();
  // --- 将 ori 和 tar 建立映射关系
  hashMap.set(ori, tar);

  // **** 开始 拷贝
  for (let k in ori) {
    if (!ori.hasOwnProperty(k)) return; //排除被拷贝对象原型链上的方法
    //判断是否需要递归拷贝
    if (ori[k] instanceof Object) {
      tar[k] = deepClone(ori[k]);
    } else {
      tar[k] = ori[k];
    }
  }

  return tar;
}

const obj4 = deepClone(originObj);
obj4.son.first = 'obj4';
obj4.arr[0].push(10);
obj4.isFn = () => {
  console.log('tar');
};
obj4.son.arr[1].c.d.d = 'tar-------d';
console.log('originObj', originObj);
console.log('tar', obj4);
