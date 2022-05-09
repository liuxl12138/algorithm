/**
 * 题目描述:
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
   如果数组中不存在目标值 target，返回 [-1, -1]
 * 解题思路:
 */

//时间复杂度:O(logn)
//空间复杂度:O(1)
var searchRange = function (nums, target) {
  let index1 = binarySearch(nums, target, 1);
  let index2 = binarySearch(nums, target, 0);

  return [index1, index2];
};

function binarySearch(nums, target, flag) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (flag) {
      if (target > nums[mid]) {
        left = mid + 1;
      } else if (target == nums[mid]) {
        if (mid == 0 || nums[mid - 1] != target) {
          return mid;
        } else {
          right = mid - 1;
        }
      } else if (target < nums[mid]) {
        right = mid - 1;
      }
    } else {
      if (target > nums[mid]) {
        left = mid + 1;
      } else if (target == nums[mid]) {
        if (mid == n-1 || nums[mid + 1] != target) {
          return mid;
        } else {
          left = mid + 1;
        }
      } else if (target < nums[mid]) {
        right = mid - 1;
      }
    }
  }
  return -1;
}
