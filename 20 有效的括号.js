// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

//时间复杂度O（n）
//空间复杂度O(n+∣Σ∣)  n为栈的长度，而哈希表使用的空间为 O(∣Σ∣)

const isValid = function (s) {
	if (s.length % 2 !== 0) {
		return false
	} else {
		//用于查找作用
		let map = new Map([
			[")", "("],
			["}", "{"],
			["]", "["],
		])
		let arr = []
		for (let i = 0, len = s.length; i < len; i++) {
			if (map.has(s[i])) {
				if (arr.length == 0 || map.get(s[i]) !== arr[arr.length - 1]) {
					return false
				} else {
					arr.pop()
				}
			} else {
				arr.push(s[i])
			}
		}
		return !arr.length
	}
}
