// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

function search(nums, target) {
	let low = 0
	let high = nums.length - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		if (target === nums[mid]) {
            return mid
            //nums[low] = nums[mid]的情况：[3,1],数组只有两个元素，此时左边数组为【3】， 右边为【1】，mid为3
		} else if (nums[low] <= nums[mid]) {
			if (target >= nums[low] && target < nums[mid]) {
				high = mid - 1
			} else {
				low = mid + 1
			}
		} else {
			if (target <= nums[high] && target > nums[mid]) {
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
    }
    return -1
}
