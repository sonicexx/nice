/**
 * 获取事件委托目标对象和事件监听对象子级元素的索引： getEventTargetAndIdx
 *      在事件监听器中使用，参数为事件委托对象
 *
 * 获取窗口滚动距离：getScrollOffset
 *
 * 获取视口尺寸：getViewportSize
 *
 * 获取滚动区域尺寸：getScrollSize
 *
 * 获取元素位置：getElementPosition
 */

(() => {
  // 获取事件委托目标对象和事件监听对象子级元素的索引
  function getEventTargetAndIdx(e) {
    e = e || window.event;
    const target = e.target || e.srcElement;
    const idx = Array.prototype.indexOf.call(
      target.parentNode.childNodes,
      target
    );

    return {
      target,
      idx,
    };
  }

  // 获取窗口滚动距离
  function getScrollOffset() {
    if (window.pageXOffset) {
      return {
        left: window.pageXOffset,
        top: window.pageYOffset,
      };
    } else {
      return {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop,
      };
    }
  }

  // 获取视口尺寸
  function getViewportSize() {
    if (window.innerWidth) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      if (document.compatMode === 'BackCompat') {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight,
        };
      } else {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
        };
      }
    }
  }

  // 获取滚动区域尺寸
  function getScrollSize() {
    if (document.body.scrollWidth) {
      return {
        width: document.body.scrollWidth,
        height: document.body.scrollHeight,
      };
    } else {
      return {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      };
    }
  }

  // 获取元素位置
  function getElementPosition(el) {
    var parent = el.offsetParent,
      offsetLeft = el.offsetLeft,
      offsetTop = el.offsetTop;
    while (parent) {
      offsetLeft += parent.offsetLeft;
      offsetTop += parent.offsetTop;
      parent = parent.offsetParent;
    }

    return {
      left: offsetLeft,
      top: offsetTop,
    };
  }

  window.getEventTargetAndIdx = getEventTargetAndIdx;
  window.getScrollOffset = getScrollOffset;
  window.getViewportSize = getViewportSize;
  window.getScrollSize = getScrollSize;
  window.getElementPosition = getElementPosition;
})();
