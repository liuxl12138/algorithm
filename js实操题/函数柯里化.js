//函数柯里化
function curring(fn) {
  const len = fn.length;
  let argsArr = [];
  const _curry = function (...args) {
    argsArr = argsArr.concat(args);
    if (argsArr.length === len) {
      return fn.apply(this, argsArr);
    } else if (argsArr.length > len) {
      throw new Error("args length error");
    } else {
      return _curry;
    }
  };
  return _curry;
}

//实现add(1)(2)(3)
function add() {
  let argsArr = [];
  const _add = (...args) => {
    argsArr = argsArr.concat(args);
    return _add;
  };
  _add.toString = () => {
    if (argsArr.length == 0) {
      return 0;
    }
    return argsArr.reduce((pre, cur) => {
      return pre + cur;
    }, 0);
  };
  return _add;
}
let finalAdd = add();
console.log(finalAdd(1,2,3,4)(2).toString())

