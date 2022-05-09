// https://segmentfault.com/a/1190000021366004
function flat(arr) {
  let arrRes = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      arrRes = arrRes.concat(flat(element));
    } else {
      arrRes.push(element);
    }
  });
  return arrRes;
}

//reduce实现
function flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
}

//栈实现 (非递归)
function flat(arr) {
  let result = [];
  let stack = [].concat(arr); //将数组拷贝至栈，直接赋值会改变原数组
  while (stack.length) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val); //如果是数组，再次入栈，展开一层
    } else {
      result.unshift(val);
    }
  }
  return result;
}

//参数控制拉平参数
function flat(arr, num = 1) {
  return num > 0
    ? arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur);
      }, [])
    : arr.slice();
}


