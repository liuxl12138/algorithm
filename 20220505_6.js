function flat1(arr) {
  let arrRes = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      arrRes = arrRes.concat(flat1(element));
    } else {
      arrRes = arrRes.concat(element);
    }
  });
  return arrRes;
}

//reduce实现
function flat2(arr) {
  return arr.reduce(function (pre, cur) {
    return pre.concat(Array.isArray(cur) ? flat2(cur) : cur);
  }, []);
}

//栈实现
function flat3(arr) {
  const res = [];
  const stack = [].concat(arr);
  while (stack.length != 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val);
    } else {
      res.unshift(val);
    }
  }
  return res;
}

//控制拉平层数 + 跳过空位
function flat4(arr, num = 1) {
  return num > 0
    ? arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat4(cur, num - 1) : cur);
      }, [])
    : arr.slice();
}






//test
const arr = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  "string",
  { name: "弹铁蛋同学" },
  ,
  ,
  7
];
console.log(flat4(arr, 2));
