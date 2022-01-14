// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
//时间复杂度：O(N),左右指针分别会遍历一遍字符串
;(function () {
	const str = "afeabcdefabcbb"
	//用于记录字符是否出现过
	const strSet = new Set()
	const len = str.length
	// rightPointer为右指针，result为最后的结果
	let rightPointer = -1,
		result = 0
	//i为左指针
	for (let i = 0; i < len; i++) {
		//左指针向右移动，删除一个字符
		if (i != 0) {
			strSet.delete(str.charAt(i - 1))
		}
		// 右指针向右移动,set增加一个字符
		while (rightPointer + 1 < len && !strSet.has(str.charAt(rightPointer + 1))) {
			strSet.add(str.charAt(rightPointer + 1))
			rightPointer++
		}
		result = Math.max(result, rightPointer - i + 1)
	}
	console.log(result)
})()
