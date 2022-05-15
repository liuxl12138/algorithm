/**
 * 题目描述:
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

 * 解题思路:
 */

//时间复杂度:O(n2)
//空间复杂度:O(logn)
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) {
    return ans;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    //因为已经排序，所以如果当前数大于0，则后面所有的值都大于0，相加不可能等于0
    if (nums[i] > 0) {
      break;
    }
    //去重
    if (i > 0 && nums[i] === nums[i -1]) {
      continue;
    }
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        ans.push([nums[i], nums[l], nums[r]]);
        //去重
        while (l < r && nums[l] === nums[l+1]) {
          l++
        }
        //去重
        while (l < r && nums[r] === nums[r-1]) {
          r--;
        }
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      }
    }
  }
  return ans;
};
