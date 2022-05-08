/**
 * 题目描述:
 */

//动态规划
//时间复杂度: O(n2)
//空间复杂度: O(n) dp数组长度为n
var lengthOfLIS = function (nums) {
  let len = nums.length;
  const dp = new Array(len).fill(1);
  let max = 1;
  //以i为结尾的递增子序列的长度
  for (let i = 0; i < len; i++) {
    //i之前的递增子序列的长度
    for (let j = 0; j < i; j++) {
      //如果有值小于nums[i]，证明以i为结尾的递增子序列长度为dp[j] +1
      //循环找出大值
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};

//贪心 + 二分查找
//时间复杂度: O(nlogn)
//空间复杂度: O(n) dp数组长度为n
//参考：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-he-er-fen-cha-zhao-lian-x7dh/
var lengthOfLIS = function (nums) {
  const top = [];
  //牌堆数初始化为0
  let piles = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    let poker = nums[i];
    //二分查找
    let left = 0,
      right = piles;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      //右区间是开的，因为插入时，要选最左边
      //为什么要选最左边插入，因为要保证有序
      if (poker < top[mid]) {
        right = mid;
      } else if (poker > top[mid]) {
        left = mid + 1;
      } else {
        left = mid;
      }
    }
    if (left == piles) {
      piles++;
    }

    top[left] = poker;
  }
  return piles;
};
