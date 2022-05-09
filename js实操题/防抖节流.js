// 防抖
//先清除setTimeout,在设置新的timeout
function debounce(fn, wait, immediate) {
  let timer;
  let res;
  return function (...args) {
    let _this = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (immediate) {
      immediate = false;
      res = fn.apply(_this, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(_this, args);
      }, wait);
    }
  };
}

//节流

//第一次触发，立马执行，
//停止触发不再执行
function throttle1(fn, delay) {
  let prev = Date.now();
  return function (...args) {
    const _this = this;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(_this, args);
      prev = now;
    }
  };
}

//第一次触发，dalay后执行
//结束触发后，再执行一次
function throttle2(fn, delay) {
  let timer;
  return function (...args) {
    const _this = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(_this, args);
      }, delay);
    }
  };
}
