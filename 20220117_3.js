// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

//使用辅助栈
//time: O(n)
//space: O(n)
var MinStack = function () {
	this.stack1 = []
	this.stack2 = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	if (!this.stack1.length) {
		this.stack1.push(val)
		this.stack2.push(val)
	} else {
		this.stack2.push(Math.min(val, this.stack2[this.stack2.length - 1]))
		this.stack1.push(val)
	}
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack2.pop()
	return this.stack1.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack1[this.stack1.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.stack2[this.stack2.length - 1]
}
