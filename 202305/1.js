/**
 * 时间负责度 O(n2)
 * 空间负责度 O(1)
 */
let twoSum1 = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

/**
 * 时间负责度 O(n) map查找元素时间为O(1)
 * 空间负责度 O(n)
 */
let twoSum2 = function (nums, target) {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const value = nums[i];
    const rest = target - value;
    if (map.has(rest)) {
      return [i, map.get(rest)];
    }
    map.set(value, i);
  }
};
