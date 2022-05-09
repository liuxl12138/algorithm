
// https://www.jianshu.com/p/928c68f92c0c
// 数字的整数部分每三位一组，以“，”分节。小数部分不分节

function formatNum(num) {
  num = num.toString().split("."); //分割小数点
  let arr = num[0].split("").reverse(); //转为字符数组且倒序
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i !== 0 && i % 3 === 0) {
      res.push(",");
    }
    res.push(arr[i]);
  }
  res.reverse();
  if (num[1]) {
    //添加小数部分
    res = res.join("").concat("." + num[1]);
  } else {
    res = res.join("");
  }
  return res;
}
