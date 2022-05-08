// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。

// 如果相等，返回 true ；否则，返回 false 。

// 注意：如果对空文本输入退格字符，文本继续为空。

//time:O(n+m)
//space:O(n+m)

var backspaceCompare1 = function (s, t) {
	let stack1 = []
	let stack2 = []
	for (let sitem of s) {
		if (sitem === "#") {
			stack1.pop()
		} else {
			stack1.push(sitem)
		}
	}
	for (let titem of t) {
		if (titem === "#") {
			stack2.pop()
		} else {
			stack2.push(titem)
		}
	}
	const str1 = stack1.join("")
	const str2 = stack2.join("")
	if (str1 === str2) {
		return true
	}
	return false
}

//time:O(n+m)
//space:O(1)
var backspaceCompare2 = function (s, t) {
	let skip1 = 0,
		skip2 = 0
	let i = s.length - 1,
		j = t.length - 1

	while (i >= 0 || j >= 0) {
		while (i >= 0) {
			if (s[i] === "#") {
				skip1++
				i--
			} else if (skip1 > 0) {
				skip1--
				i--
			} else {
				break
			}
		}
		while (j >= 0) {
			if (t[j] == "#") {
				skip2++
				j--
			} else if (skip2 > 0) {
				skip2--
				j--
			} else {
				break
			}
		}
		if (s[i] !== t[j]) {
			return false
		}
		i--
		j--
	}
	return true
}
