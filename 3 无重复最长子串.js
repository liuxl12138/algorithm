/**
 * 时间复杂度:O(n)
 * 空间复杂度：O(m)，其中 m 表示字符集的大小。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let rightPoint = 0,
    result = 0;
  const set = new Set();
  
  for (let i = 0; i < len; i++) {
    const chars = s.charAt(i - 1);
    //左指针向右移动，set删除一个字符
    if (i != 0) {
      set.delete(chars);
    }
    //右指针向右移动，set增加一个字符
    while (!set.has(s.charAt(rightPoint)) && rightPoint < len) {
      set.add(s.charAt(rightPoint));
      rightPoint++;
    }
    result = Math.max(result, rightPoint - i);
  }
  return result;
};
