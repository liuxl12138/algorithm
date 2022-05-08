/**
 * 题目描述:
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

    找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

    返回容器可以储存的最大水量。

 * 解题思路:https://leetcode-cn.com/problems/validate-binary-search-tree/solution/yan-zheng-er-cha-sou-suo-shu-by-leetcode-solution/
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
