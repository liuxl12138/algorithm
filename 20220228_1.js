let array = [1, 2, 3, 4, 5, 6]
let n = array.length
// 时间复杂度 O(logn)

//非递归
function bsearch(arr, n, value) {
	let low = 0,
		high = n - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		if (arr[mid] === value) {
			return mid
		} else if (arr[mid] > value) {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return -1
}
// console.log(bsearch(array, n, 0))

function bsearch1(arr, n, value, low, high) {
	let mid = Math.floor((low + high) / 2)
	if (low > high) {
		return -1
	}
	if (value == arr[mid]) {
		return mid
	} else if (value > arr[mid]) {
		return bsearch1(arr, n, value, mid + 1, high)
	} else {
		return bsearch1(arr, n, value, low, mid - 1)
	}
}
// console.log(bsearch1(array, n, 0, 0, n - 1))

//查找第一个 值等于给定值的元素
let arr2 = [1, 2, 3, 3, 3, 6]
let n2 = arr2.length
function bsearch2(arr, n, value) {
	let low = 0,
		high = n - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		if (value > arr[mid]) {
			low = mid + 1
		} else if (value < arr[mid]) {
			high = mid - 1
		} else {
			if (mid == 0 || arr[mid - 1] !== value) {
				return mid
			} else {
				high = mid - 1
			}
		}
	}
	return -1
}
// console.log(bsearch2(arr2, n2, 3))

//查找最后一个 值等于给定值的元素
let arr3 = [1, 2, 3, 3, 3, 6]
let n3 = arr2.length
function bsearch3(arr, n, value) {
	let low = 0,
		high = n - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		if (value > arr[mid]) {
			low = mid + 1
		} else if (value < arr[mid]) {
			high = mid - 1
		} else {
			if (mid === n - 1 || arr[mid + 1] !== value) {
				return mid
			} else {
				low = mid + 1
			}
		}
	}
	return -1
}
// console.log(bsearch3(arr3, n3, 3))

//查找第一个大于等于给定值的元素
let arr4 = [1, 2, 3, 4, 4, 6]
let n4 = arr4.length
function bsearch4(arr, n, value) {
	let low = 0,
		high = n - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		if (value > arr[mid]) {
			low = mid + 1
		} else {
			if (mid == 0 || arr[mid - 1] < value) {
				return mid
			} else {
				high = mid - 1
			}
		}
	}
	return -1
}
// console.log(bsearch4(arr4, n4, 3))


//查找最后一个小于等于给定值的元素
let arr5 = [1, 2, 3, 4, 4, 6]
let n5 = arr5.length
function bsearch5(arr, n, value) {
	let low = 0,
		high = n - 1
	while (low <= high) {
		let mid = Math.floor((low + high) / 2)
		if (value < arr[mid]) {
			high = mid - 1
		} else {
			if (mid == n-1 || arr[mid + 1] > value) {
				return mid
			} else {
				low = mid + 1
			}
		}
	}
	return -1
}
console.log(bsearch5(arr4, n4, 4))