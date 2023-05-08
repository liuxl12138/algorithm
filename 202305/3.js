/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
let lengthOfLongestSubstring = function (s) {
  const len = s.length;
  const set = new Set();
  let rightPoint = 0;
  let result = 0;
  //判断字符串只有一个字符的情况
  if (len === 1) {
    result = 1;
  }
  for (let i = 0; i < len; i++) {
    if (i != 0) {
      set.delete(s.charAt(i - 1));
    }
    while (rightPoint < len && !set.has(s.charAt(rightPoint))) {
      set.add(s.charAt(rightPoint));
      rightPoint++;
    }
    result = Math.max(result, rightPoint - i);
  }
  return result;
};
