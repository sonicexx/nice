// 导入模板
import tpl from './index.tpl';

//执行模板
console.log(tpl());
/**
 * 执行返回
 * <div class="tpl1 {{ className }}" style="display: {{ style }};">
      <div class="title">{{ title }}</div>
      <img src="{{ url }}" />
  </div> 
*/

function tplReplace(tpl, tplObj) {
  return tpl().replace(/\{\{(.*?)\}\}/g, (node, key) => {
    console.log(node); //返回：{{ className }}、{{ style }}、{{ title }}、{{ url }}
    console.log(key); //返回： className、style、title、url

    return tplObj[key.trim()]; //返回 tplObj 中对应 key 的值：注意 key 可能存在空格
  });
}

// 准备替换的模型
const { className, display, title, url } = {
  className: 'active',
  display: false,
  title: 'nice',
  url: 'http://B-612.com',
};

// 执行 tplReplace 方法
const replacedTpl = tplReplace(tpl, {
  className,
  style: display ? 'block' : 'none',
  title,
  url,
});

console.log(replacedTpl);
/** 返回：
 <div class="tpl1 active" style="display: none;">        
    <div class="title">nice</div>
    <img src="http://B-612.com" />
  </div>
*/
