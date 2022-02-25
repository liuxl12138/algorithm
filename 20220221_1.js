//排序算法
let arr = [4, 6, 5, 1, 3, 2]
const length = arr.length

//冒泡排序
// 最好情况时间复杂度 O(n)
// 最坏情况时间复杂度  O(n2)
// 原地排序算法
// 稳定排序算法
function bubbleSort(a, n) {
	for (let i = 0; i < n; i++) {
		let flag = false
		for (let j = 0; j < n - i - 1; j++) {
			if (a[j] > a[j + 1]) {
				let tmp
				tmp = a[j + 1]
				a[j + 1] = a[j]
				a[j] = tmp
				flag = true
			}
		}
		if (!flag) {
			break
		}
	}
}
// bubbleSort(arr, length)
// console.log(arr)

// 插入排序
// 最好情况时间复杂度 O(n)
// 最坏情况时间复杂度  O(n2)
// 原地排序算法
// 稳定排序算法
function insertSort(arr, n) {
	if (n <= 1) {
		return
	}
	for (let i = 1; i < n; i++) {
		let value = arr[i]
		let j = i - 1
		for (; j >= 0; j--) {
			if (arr[j] > value) {
				arr[j + 1] = arr[j]
			} else {
				break
			}
		}
		arr[j + 1] = value
	}
}
// insertSort(arr, length)
// console.log(arr)

// 选择排序
// 最好情况时间复杂度 O(n2)
// 最坏情况时间复杂度  O(n2)
// 原地排序算法
// 不稳定排序算法
//比如 5，8，5，2，9 这样一组数据，使用选择排序算法来排序的话，第一次找到最小元素 2，与第一个 5 交换位置，那第一个 5 和中间的 5 顺序就变了，所以就不稳定了。正是因此，相对于冒泡排序和插入排序，选择排序就稍微逊色了。
function selectSort(arr, n) {
	let tmp
	for (let i = 0; i < n; i++) {
		let min = i
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}
		if (min !== i) {
			tmp = arr[i]
			arr[i] = arr[min]
			arr[min] = tmp
		}
	}
}
// selectSort(arr, length)
// console.log(arr)

// 合并排序
// 最好情况时间复杂度 O(nlogn)
// 最坏情况时间复杂度  O(nlogn)
// 非原地排序算法
// 稳定排序算法
function mergeSort(arr) {
	let tmp = []
	sort(arr, 0, arr.length - 1, tmp)
	function sort(arr, left, right, tmp) {
		if (left < right) {
			let mid = Math.floor((left + right) / 2)
			sort(arr, left, mid, tmp)
			sort(arr, mid + 1, right, tmp)
			merge(arr, left, right, mid, tmp)
		}
	}
	function merge(arr, left, right, mid, tmp) {
		let i = left
		let j = mid + 1
		let t = 0

		while (i <= mid && j <= right) {
			if (arr[i] <= arr[j]) {
				tmp[t++] = arr[i++]
			} else {
				tmp[t++] = arr[j++]
			}
		}

		while (i <= mid) {
			tmp[t++] = arr[i++]
		}
		while (j <= right) {
			tmp[t++] = arr[j++]
		}
		t = 0
		while (left <= right) {
			console.log(tmp,'tmp')
			arr[left++] = tmp[t++]
			console.log(arr,'arr')

		}
	}
}
mergeSort(arr, length)
// console.log(arr, "1111")

// 快速排序
// 最好情况时间复杂度 O(nlogn)
// 最坏情况时间复杂度  O(n2)
// 原地排序算法,不使用额外的空间
// 不稳定排序算法,有可能改变相同元素的位置

function quikSort(arr, left, right) {
	if (left < right) {
		let i = left
		let j = right
		let base = arr[left]
		let tmp
		while (i != j) {
			while (arr[j] >= base && j > i) {
				j--
			}
			while (arr[i] <= base && j > i) {
				i++
			}
			if (j > i) {
				tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
			}
		}
		arr[left] = arr[j]
		arr[j] = base
		quikSort(arr, left, j - 1)
		quikSort(arr, j + 1, right)
	} else {
		return
	}
}
// quikSort(arr, 0, arr.length - 1)
// console.log(arr)
