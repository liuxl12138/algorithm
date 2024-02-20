/**
 * @description 时间复杂度：O(n2)
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive1 = function (nums) {
  const set = new Set();
  for (let item of nums) {
    set.add(item);
  }
  let finalLen = 0;
  for (const item of nums) {
    let len = 1;
    let next = item + 1;
    while (set.has(next)) {
      len++;
      next = item + 1;
    }
    finalLen = Math.max(len, finalLen);
  }
  return finalLen;
};

/**
 * @description 时间复杂度：O(n)
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive2 = function (nums) {
  let set = new Set();
  for (const item of nums) {
    set.add(item);
  }
  let finalLen = 0;
  for (let item of set) {
    if (!set.has(item - 1)) {
      let len = 1;
      let next = item + 1;
      while (set.has(next)) {
        len++;
        next = next+1;
      }
      finalLen = Math.max(len, finalLen);
    }
  }
  return finalLen;
};
