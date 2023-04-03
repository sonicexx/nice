//**** 打字效果
// 字符一个一个插入, 同时可以设置 appendDelay 来控制文字内容插入总盒子的时机
//比如:打印完一句, 再打印下一句
function printIt(opt) {
  const { el, text, tag = 'p', textDelay = 200, appendDelay = 0 } = opt;
  // el-插入内容的总盒子
  // text-插入内容
  // tag-包裹内容的标签
  // textDelay-打字速度
  // appendDelay-插入盒子的偏移时间

  let i = 0; //锁定添加内容

  //--总偏移
  setTimeout(() => {
    // 创建指定标签元素
    const obox = document.createElement(tag);

    // 插入内容
    const interval = setInterval(() => {
      obox.textContent = obox.textContent.slice(0, i++) + text[i - 1] + '_';
      if (i >= text.length) {
        clearInterval(interval);
        obox.textContent = obox.textContent.slice(0, -1);
      }
    }, textDelay);

    // 插入总盒子
    el.appendChild(obox);
  }, appendDelay);
}
